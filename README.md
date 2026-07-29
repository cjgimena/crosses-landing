# crossesapp.com

The marketing site for **Crosses**, an iOS app that tracks a team's racquet-stringing
machines. Static HTML and CSS, no build step, deployed to Vercel.

```
.
├── index.html                              # landing page (crossesapp.com/)
├── og.png                                  # 1200x630 social share card (built, committed, served)
├── api/waitlist.js                         # serverless POST → Airtable (retired, unwired — see below)
├── m/index.html                            # fallback for phones without the app (/m/<token>)
├── .well-known/apple-app-site-association  # AASA — makes /m/* open the iOS app
├── vercel.json                             # AASA content-type + /m/<token> routing
├── brand/crosses-mark.svg                  # the woven "#" mark, standalone
├── brand/og.html                           # source for og.png (C2 · Light lockup); fonts under brand/fonts
├── scripts/build-og.mjs                    # renders brand/og.html → og.png with headless Chrome
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

## The CTAs

The hero and closing CTAs point at the `#access` section, which is a single link to the
public TestFlight invite:

```
https://testflight.apple.com/join/U9NDt4kd
```

It appears in three places — `index.html` (`#access`), `m/index.html` (the "Get Crosses"
button), and `AppLinks.testFlightURL` in the app repo, which ships it in every room
invite. Rotating the link means changing all three.

### The retired waitlist form

`#access` used to be an email form, because there was no public way into the beta. The
TestFlight link is that way, so the form and its submit handler came out.

`api/waitlist.js` is still here and still deploys, but **nothing posts to it.** It's kept
because the Airtable wiring is the tedious part to rebuild — if you need email capture
again (an App Store launch list, say), the endpoint is ready and only the markup has to
come back. Delete the file and the env vars if you'd rather it stopped being an
unauthenticated public endpoint.

If you do re-wire it, set these in **Vercel → Project → Settings → Environment
Variables** (then redeploy):

| Var | Required | Notes |
|---|---|---|
| `AIRTABLE_TOKEN` | yes | Personal access token, scope `data.records:write`, on the base only |
| `AIRTABLE_BASE_ID` | yes | `appXXXXXXXXXXXXXX` |
| `AIRTABLE_TABLE` | no | Table name or id. Default `Waitlist` |
| `WAITLIST_EMAIL_FIELD` | no | Email column. Default `Email` |
| `WAITLIST_SOURCE_FIELD` | no | If set, stamped with `crossesapp.com`; skipped when unset |

The table needs at least the email column. Until the vars are set the endpoint returns a
polite 500 rather than silently dropping the address. To exercise it locally, run
`vercel dev` (plain `open index.html` serves the page but not the function).

## Editing the site

Open this folder in any editor and open `index.html` in a browser. There is no build step.
The only network dependency is the Google Fonts stylesheet (Archivo + Instrument Sans +
Martian Mono).

Design notes worth preserving:

- Colors match the app's `CrossesTheme.swift`. If the app's palette changes, change them
  here too.
- **Orange means exactly one thing: live / now / yours.** Nothing else on the page is ever
  orange. Booked is grey; "yours" is grey hatched. `--orange-deep` (#ED2000) is the same
  accent darkened to carry text contrast for labels and links on the off-white ground.
- Body copy sits at 64% ink, not the comp's 52-55%, so it clears WCAG AA (4.5:1) on the
  `#F5F5F7` ground. Keep it there; lighter grey fails contrast.
- The wordmark is the app's own logo treatment: uppercase **SF Mono** (the app's system
  monospace), semibold, `.138em` tracking, matching the brand sheet. Off Apple platforms
  the stack falls back to Menlo, then the local monospace. Martian Mono is the instrument
  label (the small mono eyebrows, stencils, and captions).
- The page is light-only, matching the `Crosses Landing v2` comp. Content is visible by
  default; JS only layers on the reveal, board loop, timer, and scroll choreography, so
  no-JS and reduced-motion renders still get the whole page. Keep that invariant.
- The social share card (`og.png`, wired into `index.html` and `m/index.html` as
  `og:image` / `twitter:image`) is the **C2 · Light** lockup from the brand sheet: the
  woven mark, the CROSSES wordmark, the orange STRING TRACKING tagline, and the install
  channel, on the off-white ground. It carries no headline — the hero line already rides
  along as `og:description`, so repeating it in the image only made the card noisier at
  the size these previews actually render. Keep it that way. It is a built asset. Edit
  the template at `brand/og.html`, then regenerate and re-commit both files:

  ```bash
  node scripts/build-og.mjs
  ```

  The one webface it needs is vendored under `brand/fonts/` (Martian Mono, the same face
  the site uses) so the render is deterministic and offline. Set `CHROME` to point the
  script at a Chromium binary other than the default macOS Google Chrome. If you rename
  or move `og.png`, update the absolute `og:image` URLs in both HTML files to match.
- The footer carries one outbound social link, Instagram (`@crossesapp`), icon-only with an
  `aria-label`. The glyph is stroke-drawn like the woven mark and sits at `--ink-label`, so
  the footer stays the quietest surface and the icon never takes the accent — orange keeps
  meaning live / now / yours. (The orange focus ring is the site-wide affordance and
  applies here like anywhere else.) The `href` is the bare profile URL deliberately: the
  link Instagram hands you from the app carries `igsh=` and `utm_source=qr` params, which
  would tag every visitor arriving from the site as a QR scan. Strip them if you repoint
  it. The markup and its CSS are duplicated in `index.html`, `privacy/index.html`, and
  `support/index.html`, since each page carries its own copy of the footer.

## When the app ships

- Uncomment the smart banner in `m/index.html` (a comment marks the spot) and repoint its
  "Get Crosses" button from TestFlight to the App Store URL. TestFlight builds expire; the
  listing won't. Retire `AppLinks.testFlightURL` in the app repo for `appStoreID` at the
  same time, and swap the `#access` CTA in `index.html`.
- The hero chip and the `#access` fold both say TestFlight; both need rewording.
- To make `/m/<token>` name the actual machine ("Court 3 · UCLA Team Room"), add a narrow
  read path in the app's existing Supabase project (a Postgres RPC returning just machine
  name + room name for a token). Keep RLS strict, use the publishable/anon key only, and
  never put the service_role key in this repo.
