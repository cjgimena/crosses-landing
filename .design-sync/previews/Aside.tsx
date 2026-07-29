import { Aside } from '@crosses/ui';

export const Default = () => (
  <div style={{ maxWidth: 260 }}>
    <Aside eyebrow="The room" heading="Status nobody has to maintain.">
      State comes from what people are doing on the machines. It changes the second someone
      finishes: no sign-up sheet, no asking the group chat.
    </Aside>
  </div>
);

export const WithoutBody = () => (
  <div style={{ maxWidth: 260 }}>
    <Aside eyebrow="Machine tags" heading="One tag per machine." />
  </div>
);

/** The three the page uses, at the 260px column width they live in. */
export const TheSectionHeaders = () => (
  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 220px)', gap: 32 }}>
    <Aside eyebrow="The room" heading="Status nobody has to maintain.">
      It changes the second someone finishes.
    </Aside>
    <Aside eyebrow="A session" heading="Three moves, every time.">
      The same three, which is why they're on the mark. Tap, string, log.
    </Aside>
    <Aside eyebrow="Machine tags" heading="One tag per machine.">
      Pair a sticker to a machine once, from inside the app.
    </Aside>
  </div>
);
