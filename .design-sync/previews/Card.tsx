import { Card, LiveTag } from '@crosses/ui';

export const Default = () => (
  <Card style={{ padding: '24px 26px' }}>
    <b style={{ fontSize: 16, letterSpacing: '-.02em' }}>Printed tags</b>
    <p style={{ margin: '8px 0 0', fontSize: 14.5, color: 'var(--ink-64)', maxWidth: '44ch' }}>
      Weatherproof NFC stickers with the mark printed on the cover and the machine number beside it.
    </p>
  </Card>
);

/** A header row is the usual first child — a title on the left, status on the right. */
export const WithAHeader = () => (
  <Card style={{ padding: '24px 26px' }}>
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <b style={{ fontSize: 17, letterSpacing: '-.02em' }}>Team Room</b>
        <span style={{ fontSize: 13, color: 'var(--ink-label)' }}>Wednesday, July 22nd</span>
      </span>
      <LiveTag />
    </div>
  </Card>
);

export const Empty = () => <Card style={{ height: 120 }} />;
