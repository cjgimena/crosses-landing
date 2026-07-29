# Building with Crosses

A design system for shared-equipment status: a stringing-machine room where the
board tells you what is free without anyone maintaining it. Precise, quiet,
mechanical — the voice of a well-made instrument, not a startup pitch.

## Wrap everything in `CrossesRoot`

`CrossesRoot` is where every token, the off-white ground, the type stack and the
focus rings come from. Without it components render with no token values at all:
unstyled text on a transparent background.

```jsx
<CrossesRoot>
  <Masthead>…</Masthead>
  <main>…</main>
  <SiteFooter fine="© 2026 Crosses." />
</CrossesRoot>
```

Pass `animated` only when something will scroll — it arms `Reveal`, which hides
its children until they enter the viewport. Leave it off for static renders.

## The one rule: one accent, one meaning

Orange (`--orange`) means **live, now, or yours** — nothing else, ever. It is a
status signal, not a brand wash. A decorative orange fill breaks the only rule
the system rests on. Every other surface is ink on off-white. The primary button
is deliberately ink, not orange.

Three depths, all real: `--orange` for graphics (fills, dots, the string),
`--orange-deep` for small text on light grounds, `--orange-ink` for a status
label that must clear AA on white.

Status is never colour alone — each state also carries a word and a shape
(filled dot, hollow dot, hatched bar).

## Styling idiom: tokens, not utility classes

There is **no utility-class vocabulary** — no `bg-*`, no `gap-*`. Do not invent
one. Compose with the library's own layout components and reach for CSS custom
properties for anything left over.

Colour `--bg` `--surface` `--surface-2` `--ink` `--orange` `--orange-deep`
`--orange-ink` `--booked`
Ink ramp `--ink-90` `--ink-70` `--ink-64` `--ink-label` `--ink-42` `--ink-32`
(body copy is `--ink-64`; labels and nav are `--ink-label`; `--ink-42` is for
aria-hidden decoration only — anything readable must stay at `--ink-64` or above)
Rules `--line` `--line-soft` `--hair`
Measure `--shell` (1180px) `--pad` (responsive gutter)
Type `--sans` (Instrument Sans, body) `--display` (Archivo, headings and
numerals) `--mono` (Martian Mono, labels and stamps) `--wordmark`
Motion `--ease`
Depth `--z-base` `--z-sticky` `--z-header`

The component classes in the stylesheet (`.lane`, `.card`, `.board`, `.tagcard`,
`.btn-solid` …) are owned by the components. Render the component; never
hand-write its markup.

Layout comes from `Shell` `Band` `Split` `Three` `Card` — a page is bands, each
band a `Split` of an `Aside` and its content.

## Where the truth is

Read `styles.css` and its `@import` closure (the vendored `@font-face` rules and
the compiled component CSS) before styling anything, and each component's
`.prompt.md` for its API. Those files beat any summary here.

## An idiomatic build

```jsx
<CrossesRoot>
  <Band id="room">
    <Split>
      <Aside eyebrow="The room" heading="Status nobody has to maintain.">
        It changes the second someone finishes.
      </Aside>
      <RoomBoard
        date="Wednesday, July 22nd"
        aria-label="Machine 01 free, Machine 02 in use by Mia, Machine 03 booked."
        machines={[
          { machine: 'Machine 01', model: 'WISE 2086',
            status: { kind: 'free', label: 'Free now' } },
          { machine: 'Machine 02', model: 'GAMMA X-ELS',
            status: { kind: 'inuse', label: 'Mia · 24m left', left: 42, width: 16 } },
        ]}
      />
    </Split>
    <Three className="notes">
      <Note heading="One accent, one meaning">
        Orange marks what is live right now, or what is yours.
      </Note>
    </Three>
  </Band>
</CrossesRoot>
```

`RoomBoard` and `SessionScreen` are exposed as a single `role="img"`, so their
`aria-label` must say in a sentence what the whole surface says. Write it.

Copy is concrete and understated: name what the product literally does. Headings
are declarative sentences ending in a full stop. `Eyebrow` and `FinePrint` are
mono stamps, never sentences.
