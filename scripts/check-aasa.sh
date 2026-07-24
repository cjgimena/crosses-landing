#!/usr/bin/env bash
#
# Guards the seam between this repo and the iOS app.
#
# Universal Links only work while three things agree, and they now live in two
# repos with nothing but this script connecting them:
#
#   1. .well-known/apple-app-site-association here  -> appIDs: "<TeamID>.<BundleID>"
#   2. crosses-ios.entitlements in the app repo     -> applinks:<domain>
#   3. AppLinks.swift in the app repo               -> the domain + /m/<token> path
#
# When they drift, nothing fails to build and no test goes red. Physical NFC
# tags just stop opening the app. Run this after any change to the app's bundle
# ID, Team ID, or deep-link paths, and after every deploy of this site.
#
# Usage:
#   scripts/check-aasa.sh                      # check the local file only
#   scripts/check-aasa.sh --live               # also check what the domain serves
#   EXPECTED_APPID=X.Y scripts/check-aasa.sh   # override the expected value
#
set -euo pipefail

DOMAIN="${DOMAIN:-crossesapp.com}"
EXPECTED_APPID="${EXPECTED_APPID:-FYQ358R59X.crosses.crosses-ios}"
AASA_PATH=".well-known/apple-app-site-association"
LIVE_URL="https://${DOMAIN}/.well-known/apple-app-site-association"

fail() { printf '\033[31mFAIL\033[0m  %s\n' "$1" >&2; exit 1; }
pass() { printf '\033[32mok\033[0m    %s\n' "$1"; }

appid_from_stdin() {
  python3 -c '
import json, sys
try:
    d = json.load(sys.stdin)
except Exception as e:
    sys.exit(f"not valid JSON: {e}")
try:
    print(d["applinks"]["details"][0]["appIDs"][0])
except (KeyError, IndexError) as e:
    sys.exit(f"no applinks.details[0].appIDs[0]: {e}")
'
}

# ---- 1. the file in this repo ------------------------------------------------
[ -f "$AASA_PATH" ] || fail "$AASA_PATH is missing. Universal Links are dead without it."

local_appid="$(appid_from_stdin < "$AASA_PATH")" || fail "could not parse $AASA_PATH"

if [ "$local_appid" != "$EXPECTED_APPID" ]; then
  fail "$AASA_PATH declares '$local_appid' but the app is '$EXPECTED_APPID'.
      Update whichever is wrong. The value is <TeamID>.<BundleID>; find it in the
      app repo's crosses-ios.entitlements and Xcode signing settings."
fi
pass "$AASA_PATH declares $local_appid"

# The /m/* component is what NFC tags actually hit.
grep -q '"/m/\*"' "$AASA_PATH" \
  || fail "$AASA_PATH has no /m/* path component. Tag URLs are https://$DOMAIN/m/<token>."
pass "/m/* path component present"

# vercel.json must keep serving it as JSON, unredirected.
if [ -f vercel.json ]; then
  python3 - <<'PY' || fail "vercel.json no longer forces the AASA content-type, or lost the /m rewrite"
import json, sys
v = json.load(open("vercel.json"))
hdrs = v.get("headers", [])
ok_ct = any(
    h.get("source", "").endswith("apple-app-site-association")
    and any(x.get("key", "").lower() == "content-type"
            and x.get("value") == "application/json" for x in h.get("headers", []))
    for h in hdrs)
ok_rw = any(r.get("source") == "/m/:token" for r in v.get("rewrites", []))
sys.exit(0 if (ok_ct and ok_rw) else 1)
PY
  pass "vercel.json still sets the AASA content-type and rewrites /m/:token"
fi

# ---- 2. what the domain actually serves --------------------------------------
if [ "${1:-}" = "--live" ]; then
  code="$(curl -s -o /dev/null -w '%{http_code}' -L "$LIVE_URL")"
  [ "$code" = "200" ] || fail "$LIVE_URL returned HTTP $code (need 200)"

  redirects="$(curl -s -o /dev/null -w '%{num_redirects}' -L "$LIVE_URL")"
  [ "$redirects" = "0" ] || fail "$LIVE_URL redirects ($redirects hop(s)). Apple does not follow redirects for the AASA."

  ctype="$(curl -s -o /dev/null -w '%{content_type}' "$LIVE_URL")"
  case "$ctype" in
    application/json*) ;;
    *) fail "$LIVE_URL serves content-type '$ctype', need application/json" ;;
  esac

  live_appid="$(curl -s "$LIVE_URL" | appid_from_stdin)" || fail "deployed AASA is not parseable"
  [ "$live_appid" = "$EXPECTED_APPID" ] \
    || fail "deployed AASA declares '$live_appid', expected '$EXPECTED_APPID' (stale deploy?)"

  pass "$LIVE_URL: 200, no redirect, application/json, $live_appid"
fi

printf '\nAASA checks passed.\n'
