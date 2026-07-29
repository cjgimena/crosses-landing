import { CrossesRoot, Eyebrow, ButtonSolid } from '@crosses/ui';

/**
 * The wrapper every other component needs. Everything inside it inherits the
 * tokens, the off-white ground, the type and the focus rings.
 */
export const Default = () => (
  <CrossesRoot style={{ padding: 32 }}>
    <Eyebrow>The room</Eyebrow>
    <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 22, margin: '14px 0 0' }}>
      Status nobody has to maintain.
    </h2>
    <p style={{ margin: '12px 0 24px', color: 'var(--ink-64)', fontSize: 15, maxWidth: '46ch' }}>
      Everything in here — the ground, the ink ramp, Instrument Sans, the orange — comes from the
      root. Mount one at the top of the tree and put the page inside it.
    </p>
    <ButtonSolid href="#access">Get early access</ButtonSolid>
  </CrossesRoot>
);
