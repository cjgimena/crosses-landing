# Product

## Register

brand

## Users

Members of a team room that shares one or more racquet-stringing machines: college
and academy players, team stringers, and the occasional coach or guest. On phones,
usually standing in or near the stringing room, deciding whether to walk over to a
machine or hold a window for later. Secondary reader: a prospective user evaluating
whether the app is worth waiting for before it ships.

## Product Purpose

Crosses is an iPhone app that keeps every shared stringing machine on one live screen:
who is on which machine, what is free, what is booked, and who did what. This site is
its pre-launch marketing page. Success is a visitor understanding the product in one
scroll and installing the open TestFlight beta. The app is built and in testing; the
page's job is comprehension plus the install, not a sale.

## Brand Personality

Precise, quiet, mechanical. The voice of a well-made instrument, not a startup pitch.
Three words: exact, calm, physical. The design world is a stringing machine under
tension: structural rules read as strings, and exactly one accent (orange, #FF4300)
means one thing everywhere it appears: live, now, or yours. Nothing else is orange.
Copy is concrete and understated; it names what the product literally does.

## Anti-references

- Generic SaaS landing pages: gradient hero, floating 3D blobs, "supercharge your
  workflow" copy, hero-metric template.
- Sports-tech loudness: neon gradients, motion for its own sake, stock action photos.
- Anything where orange is used decoratively. Orange is a status signal, not a brand
  wash; overusing it destroys the one rule the whole system rests on.

## Design Principles

1. **One accent, one meaning.** Orange marks live / now / yours, and only that. Every
   other surface is ink on off-white. The restraint is the point.
2. **Show the product, at real scale.** The room board and the session screen are the
   actual UI rendered in the page, not marketing mockups. Motion demonstrates the one
   job (status that changes with nobody maintaining it), it doesn't decorate.
3. **Instrument, not interface.** Martian Mono captions read as labels stamped on a
   machine; the numbers are tabular; the layout is a measured grid. Calm and exact.
4. **Comprehension in one scroll.** The room, a session, the tags, the ask. Each fold
   is one idea. No fold repeats another.
5. **Never ship blank.** Content is visible by default; motion is an enhancement layered
   on top, never a gate. No-JS, reduced-motion, and headless renders all get the full page.

## Accessibility & Inclusion

Target WCAG 2.2 AA. Body text ≥4.5:1, large text ≥3:1 on the off-white ground; status
colors are darkened to their -ink variants when carrying text. Full keyboard operability
with visible focus rings; a skip link to main. `prefers-reduced-motion` disables the
board loop, timer, reveals, and scroll choreography without hiding any content. Status is
never encoded by color alone: every state carries a label (Free / In use / Booked / Yours)
and a distinct shape (dot, bar, hatch). Live regions announce the board and timer politely
or not at all, never as noisy churn.
