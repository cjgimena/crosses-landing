import { Shell, Eyebrow } from '@crosses/ui';

/**
 * The measure, made visible: the rule spans the shell, the gutter is the
 * responsive `--pad`.
 */
export const Default = () => (
  <Shell style={{ borderTop: '1px solid var(--line)', paddingTop: 24, paddingBottom: 24 }}>
    <Eyebrow>The room</Eyebrow>
    <p style={{ margin: '12px 0 0', fontSize: 15, color: 'var(--ink-64)', maxWidth: '52ch' }}>
      1180px maximum, centred, with the page gutter on both sides. Everything on the page sits on
      this measure — the masthead bar, each band, the footer.
    </p>
  </Shell>
);
