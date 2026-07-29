import { Card, CrossesMark } from '@crosses/ui';

export const Default = () => <CrossesMark size={64} />;

export const Sizes = () => (
  <div style={{ display: 'flex', alignItems: 'flex-end', gap: 20 }}>
    <CrossesMark size={20} />
    <CrossesMark size={24} />
    <CrossesMark size={40} />
    <CrossesMark size={64} />
  </div>
);

/**
 * On a white surface the weave has to knock out to that surface, not to --bg,
 * or the crossing bars show a grey seam.
 */
export const OnACard = () => (
  <Card style={{ padding: 24, display: 'inline-block' }}>
    <CrossesMark size={64} knockout="var(--surface)" />
  </Card>
);
