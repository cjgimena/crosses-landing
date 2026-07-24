# crossesapp.com

The marketing site for **Crosses**, an iOS app that tracks a team's racquet-stringing
machines. Static HTML and CSS, no build step, deployed to Vercel.

```
.
├── index.html                              # landing page (crossesapp.com/)
├── m/index.html                            # fallback for phones without the app (/m/<token>)
├── .well-known/apple-app-site-association  # AASA — makes /m/* open the iOS app
├── vercel.json                             # AASA content-type + /m/<token> routing
├── brand/crosses-mark.svg                  # the woven "#" mark, standalone
└── scripts/check-aasa.sh                   # guards the seam with the app repo
```

## This repo has a hard dependency on the app repo

The app source lives separately, in **`crosses-ios`**. Universal Links only work while
three values agree across that boundary:

| Value | Lives in | Must equal |
|---|---|---|
| `appIDs: ["FYQ358R59X.crosses.crosses-ios"]` | this repo, `.well-known/apple-app-site-association` | `<TeamID>.<BundleID>` of the app |
| `applinks:crossesapp.com` | app repo, `crosses-ios.entitlements` | this site's domain |
| `AppLinks.domain` + the `/m/<token>` URL written to NFC tags | app repo, `AppLinks.swift` | the domain and the AASA's `/m/*` component |

**Nothing enforces this.** Drift produces no build error and no failing test. Physical NFC
tags simply stop opening the app, and you find out when someone holds a phone to a machine.

So run the check after any change to the app's bundle ID, Team ID, or deep-link paths, and
after deploying:

```bash
scripts/check-aasa.sh --live
```

Without `--live` it validates only the files in this repo (fast, no network). With `--live`
it also fetches what the domain actually serves and asserts HTTP 200, zero redirects,
`application/json`, and a matching appID.

## Deploy to Vercel

1. **Add New → Project →** import this repo.
2. **Root Directory: `/`** (the default — files already sit at the repo root).
   Framework preset **Other**. No build command, no output directory.
3. Deploy, sanity-check the `*.vercel.app` URL, then attach the domain.

### Connect the domain

1. **Settings → Domains →** add `crossesapp.com` (and optionally `www`).
2. Point your registrar's DNS at Vercel (A record for the apex, or their nameservers).
   HTTPS is provisioned automatically.
3. **`crossesapp.com` must be the primary domain and serve directly, NOT redirect** to
   `www`. NFC tags encode the apex, and a redirect on it breaks Universal Links.

## The AASA is the thing that breaks

Apple does not follow redirects for `/.well-known/apple-app-site-association`, and rejects
it unless it is served as `application/json`. `vercel.json` pins both; keep those two rules
whatever else changes:

```json
{ "headers":  [{ "source": "/.well-known/apple-app-site-association",
                 "headers": [{ "key": "Content-Type", "value": "application/json" }] }],
  "rewrites": [{ "source": "/m/:token", "destination": "/m/index.html" }] }
```

## Testing tags (requires a real iPhone, not the Simulator)

1. Build the app to your device and pair a tag to a machine. That writes
   `https://crossesapp.com/m/<token>` onto the tag.
2. Lock the phone and tap the tag: the app should open straight to that machine.
   During development, append `?mode=developer` to the associated domain in the entitlement
   to bypass Apple's AASA CDN cache.
3. On a phone **without** the app, or on Android, the same tag opens `/m/<token>` and shows
   the fallback page.

Also needed once, on the Apple side: the **Associated Domains** capability on the
`crosses.crosses-ios` App ID (Xcode adds it automatically with the entitlement present).
Requires a paid developer membership.

## Editing the site

Open this folder in any editor and open `index.html` in a browser. There is no toolchain.
The only network dependency is the Google Fonts stylesheet (Archivo + Martian Mono).

Design notes worth preserving:

- Colors are ported verbatim from the app's `CrossesTheme.swift`. If the app's palette
  changes, change them here too.
- **Orange means exactly one thing: live / now / yours.** Free is green, booked is grey.
  Status chip *labels* use darkened variants of those hues because the raw colors fail
  WCAG contrast as small text on a tint of themselves.
- The wordmark is the app's own logo treatment: uppercase monospace, semibold, `.138em`
  tracking. Martian Mono stands in for the app's SF Mono, which does not exist off Apple
  platforms.
- The page is theme-aware and carries a System/Light/Dark control mirroring the app's
  appearance picker.

## When the app ships

- Add the real App Store link and the smart banner in `m/index.html` (a comment marks the
  spot), and swap `appStoreID` in the app's `AppLinks.swift`.
- The hero and closing CTAs currently read "Coming soon" in `index.html`.
- To make `/m/<token>` name the actual machine ("Court 3 · UCLA Team Room"), add a narrow
  read path in the app's existing Supabase project (a Postgres RPC returning just machine
  name + room name for a token). Keep RLS strict, use the publishable/anon key only, and
  never put the service_role key in this repo.
