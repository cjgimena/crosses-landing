import { Card, LiveTag } from '@crosses/ui';

export const Default = () => <LiveTag />;

export const CustomLabel = () => <LiveTag>Updating</LiveTag>;

/** Where it belongs: opposite a card's title, marking the surface as self-updating. */
export const InABoardHeader = () => (
  <Card style={{ padding: '20px 26px' }}>
    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
      <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <b style={{ fontSize: 17, letterSpacing: '-.02em' }}>Team Room</b>
        <span style={{ fontSize: 13, color: 'var(--ink-label)' }}>Wednesday, July 22nd</span>
      </span>
      <LiveTag />
    </div>
  </Card>
);
