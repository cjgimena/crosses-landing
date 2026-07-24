# crossesapp.com — Vercel site + Universal Links host (#7)

This folder is a static site. It does three jobs:

```
web/
├── index.html                               # landing page (crossesapp.com/)
├── m/index.html                             # fallback page for phones without the app (/m/<token>)
├── .well-known/apple-app-site-association    # AASA — makes /m/* open the iOS app
└── vercel.json                              # forces the AASA content-type + routes /m/<token>
```

The app is already wired to this domain: `AppLinks.domain = "crossesapp.com"` and the
`applinks:crossesapp.com` entry in `crosses-ios.entitlements`.

## 1. Deploy to Vercel

1. Push this repo to GitHub (it already is), then in Vercel: **Add New → Project → import the repo.**
2. **Root Directory → `web`** (so `index.html` / `.well-known` / `m` sit at the site root).
   Framework preset: **Other**. No build command, no output dir — it's static.
3. Deploy. You'll get a `*.vercel.app` URL to sanity-check first.

## 2. Connect crossesapp.com

1. Vercel → Project → **Settings → Domains → add `crossesapp.com`** (and optionally `www`).
2. Point your registrar's DNS at Vercel as it instructs (an A record for the apex, or their
   nameservers). Vercel provisions the HTTPS cert automatically.
3. **Make `crossesapp.com` the primary domain — it must serve directly, NOT redirect** to
   `www` (a redirect on the apex breaks Universal Links, since the tag URLs use the apex).

## 3. Verify the AASA (the #1 thing that breaks Universal Links)

```bash
curl -sI https://crossesapp.com/.well-known/apple-app-site-association
```

Must be **HTTP 200**, `content-type: application/json`, and **no redirect** (no 301/308).
`vercel.json` already sets the content-type. Then check the body:

```bash
curl -s https://crossesapp.com/.well-known/apple-app-site-association
```

It should show `"appIDs": ["FYQ358R59X.crosses.crosses-ios"]` and component `/m/*`. Confirm
that Team ID (`FYQ358R59X`) is really yours — if not, tell me and I'll update it.

## 4. Enable the capability in Xcode / Apple

Add the **Associated Domains** capability to the `crosses.crosses-ios` App ID — either let
Xcode's automatic signing add it (Signing & Capabilities → + Capability → Associated Domains,
it's already `applinks:crossesapp.com` in the entitlements file), or add it in the Apple
Developer portal. This needs your **paid** membership (which you have).

## 5. Test on your iPhone (can't be done in the Simulator)

1. Build to your device. In the app, pair a tag to a machine — that writes
   `https://crossesapp.com/m/<token>` onto the tag.
2. Lock the phone, tap the tag: the app should open straight to that machine.
   During development you can append `?mode=developer` to the associated domain to skip Apple's
   AASA CDN cache.
3. On a phone **without** the app (or Android), tapping the tag opens `crossesapp.com/m/<token>`
   → the fallback page.

## Later (when the app is published)

- Swap `appStoreID` in `AppLinks.swift` and add the real App Store link + smart banner in
  `m/index.html` (there's a comment marking where).
- If you want the fallback page to name the actual machine ("Court 3 · UCLA Team Room"), that
  needs a small token→machine lookup (a Supabase edge function) — the static page can't resolve
  it alone. Easy to add when you want it.
