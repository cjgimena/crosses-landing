# design-sync notes — @crosses/ui

Repo-specific gotchas. Read this before a re-sync.

## Layout of this repo

- The design system is `packages/ui`; the repo root is a hand-written static site
  (`index.html`) that predates it and is **not** part of the sync. Don't point the
  converter at the root.
- The converter needs explicit paths — the package isn't in any `node_modules`
  (npm won't self-install), so `--entry` is required:

  ```sh
  node .ds-sync/package-build.mjs --config .design-sync/config.json \
    --node-modules packages/ui/node_modules \
    --entry ./packages/ui/dist/index.js --out ./ds-bundle
  ```

- `cfg.buildCmd` is `npm --prefix packages/ui run build`. Run it before the
  converter whenever `packages/ui/src` changed.

## Things that cost a debugging cycle

- **`cfg.provider` must stay `CrossesRoot`.** Every token is declared on
  `:root, .crx-root`, and `CrossesRoot` is what puts `.crx-root` on the tree.
  Without the provider every preview renders unstyled.
- **Don't "fix" the `:where(.crx-root)` scoping in `src/styles/base.css`.** The
  base element resets are deliberately written as `:where(.crx-root) a { … }` so
  they weigh the same as a bare element selector. Rewriting them as `.crx-root a`
  outranks every component class — the first casualty is `ButtonSolid`, whose
  label goes ink-on-ink and disappears. This was a real bug, caught visually.
- **Never set `cfg.extraFonts`.** The fonts are vendored into the package
  (`src/styles/fonts/*.woff2`, wired by `src/styles/fonts.css`) and therefore
  already ride in `cssEntry` (`dist/index.css`) with hashed filenames. Setting
  `extraFonts` to the source `fonts.css` too ships each family **twice** — two
  competing `@font-face` blocks and ~87 KB of dead weight. Expect exactly 3
  `@font-face` rules and 3 woff2 files in `ds-bundle/fonts/`.
- **`cfg.tokensGlob` does nothing here** and was removed. `copyTokens()` returns
  early unless `cfg.tokensPkg` is set, and globs inside
  `node_modules/<tokensPkg>`. This DS has no separate tokens package — the 27
  tokens live in `_ds_bundle.css`, which `styles.css` `@import`s, so designs do
  get them. `ds-bundle/tokens/` being empty is expected, not a fault.
- **Three components need a card viewport wider than the 900px breakpoint.**
  `Nav`, `Split` and `Masthead` all hide or collapse their content below 900px
  (`.nav .links { display: none }`, `.split` → one column). At the default 900px
  capture viewport `Nav`'s two stories rendered identically — both showing only
  the action button. `cfg.overrides` gives them explicit wider viewports; don't
  drop those.
- **`Masthead` is `position: fixed`**, so its preview wraps it in a
  `transform: translateZ(0)` container to create a containing block. Without that
  it pins to the viewport and escapes the card.
- **`SkipLink` only exists visually when focused** (`left: -9999px` otherwise).
  Its single story pins `left: 0`; there is no meaningful resting-state card.

## Fonts

Archivo, Instrument Sans and Martian Mono are all SIL Open Font License and are
vendored deliberately — a design built with this DS renders wherever the design
tool puts it, with no `<head>` we control, and a fallback face silently undoes
the typographic system.

`packages/ui/scripts/fetch-fonts.mjs` re-fetches them. Google serves **one
variable woff2 per family** covering weights 400–600, not three static weights;
the script collapses the per-weight blocks into one `@font-face` with a weight
range. If a future run emits nine files, the parse regressed to treating the
variable font as statics.

## Known render warns

None. The last validate ran completely clean — 46/46 previews render, no
`[GRID_OVERFLOW]`, no `[FONT_MISSING]`, no `[RENDER_*]`. **Any warn on a future
run is new** — look at it rather than assuming it was always there.

`(.d.ts parse check skipped — typescript not in node_modules)` is informational
and expected: the converter's staged deps don't include `typescript`. The types
are checked properly by `npm --prefix packages/ui run typecheck`.

## DO NOT RECONCILE — hand-authored cards live in this project

The design project holds **two** design systems: the 46 components this repo
syncs, and a set of hand-authored documentation cards that are not produced by
any build here. Confirmed keepers (2026-07-28):

```
components/buttons.html      foundations/brand.html
components/empty-state.html  foundations/color.html
components/headers.html      foundations/geometry.html
components/navigation.html   foundations/type.html
components/status.html       platform/divergence.html
components/surfaces.html
```

Six of these sit under `components/`, which is inside the upload plan's delete
globs. **The close-out reconciliation will propose deleting all of them** — it
computes "remote paths the local `ds-bundle/` does not contain", and it cannot
tell hand-authored work from an orphan this repo dropped. Skip those paths every
time. `foundations/` and `platform/` are outside the plan's globs and are safe by
construction, but check them anyway.

They arrived mid-run on the first sync: `list_files` returned `[]` at the start
and 11 extra files at close-out. So an empty project at the start of a run is
**not** proof that deletes are safe at the end of it. Re-list immediately before
reconciling and diff against this list.

(That first sync also wrote `README.md` and `styles.css`. If the hand-authored
set had its own, they were overwritten — nothing here can tell, and it can't be
undone.)

## Re-sync risks

- **The previews import `'@crosses/ui'` by package name.** Renaming the package
  in `packages/ui/package.json` without updating `cfg.pkg` and all 46 files in
  `.design-sync/previews/` breaks every preview compile at once.
- **Preview stories hard-code realistic copy** (machine names, `Mia · 24m left`,
  prices at $6/tag). If the product's real vocabulary changes, these go stale
  silently — nothing checks them against anything.
- **`TagCard`'s pricing stories assume `unitPrice` 6 and max 8.** Changing the
  component defaults changes the amounts the cards show, and the grades were
  minted against the old numbers.
- **`Masthead`/`Nav`/`Split` viewports are tied to the 900px breakpoint** in
  `layout.css`. Move the breakpoint and those overrides need moving with it.
- **The fonts are pinned to whatever Google served on 2026-07-28.** Re-running
  `fetch-fonts.mjs` can pull a new font version with different metrics; that
  would change every text render and invalidate the visual grades.
- **Toolchain assumptions:** node 22, tsup 8 (esbuild), playwright chromium
  installed into `.ds-sync/node_modules` rather than the repo.
