# Crosses web — Universal Links host (#7)

These two files are all the "background NFC scan" feature needs on the web side. Deploy
them to **any HTTPS static host** you control (a free subdomain is fine):

```
web/
├── .well-known/apple-app-site-association   # AASA — makes /m/* open the app
└── m/index.html                             # fallback page for phones without the app
```

## What to do

1. **Pick a host and get a domain.** Cloudflare Pages (`*.pages.dev`), Netlify
   (`*.netlify.app`), Vercel (`*.vercel.app`), or a GitHub **user** page
   (`<user>.github.io`, not a project page) all work — you do **not** need to buy a domain.
   Deploy the `web/` folder as the site root.

2. **Verify the AASA serves correctly** (this is the #1 thing that breaks Universal Links):
   ```bash
   curl -sI https://<your-domain>/.well-known/apple-app-site-association
   ```
   It must return **HTTP 200**, `content-type: application/json`, and **no redirect**.
   On Cloudflare Pages add a `_headers` file:
   ```
   /.well-known/apple-app-site-association
     Content-Type: application/json
   ```

3. **Point the app at the domain — in two places that must match:**
   - `AppLinks.domain` in `crosses-ios/AppLinks.swift`
   - `applinks:<domain>` in `crosses-ios/crosses-ios.entitlements`

4. **Enable the capability.** In the Apple Developer portal add **Associated Domains** to
   the `crosses.crosses-ios` App ID (or let Xcode automatic-signing add it). The Team ID
   `FYQ358R59X` in the AASA is already correct.

5. **Swap the App Store id.** Replace `REPLACE_APPSTORE_ID` in `m/index.html` (and
   `AppLinks.appStoreID`) once the app is published / on TestFlight.

## Testing (device only — the Simulator can't do NFC or Universal Links)

Pair a tag in the app (writes `https://<domain>/m/<token>`), lock the phone, tap the tag:
- app installed → it opens straight to that machine;
- not installed → Safari opens `m/index.html` with a "Get Crosses" button.
