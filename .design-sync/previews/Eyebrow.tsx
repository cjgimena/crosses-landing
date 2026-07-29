import { Eyebrow } from '@crosses/ui';

export const Default = () => <Eyebrow>The room</Eyebrow>;

/** The four the page actually uses — each one names a fold. */
export const TheSetInUse = () => (
  <div style={{ display: 'grid', gap: 14 }}>
    <Eyebrow>Stringing machines · team rooms</Eyebrow>
    <Eyebrow>The room</Eyebrow>
    <Eyebrow>A session</Eyebrow>
    <Eyebrow>Machine tags</Eyebrow>
  </div>
);

/** How it reads in place: the label, then the heading it announces. */
export const AboveAHeading = () => (
  <div>
    <Eyebrow>A session</Eyebrow>
    <h2 style={{ fontFamily: 'var(--display)', fontWeight: 500, fontSize: 22, margin: '16px 0 0' }}>
      Three moves, every time.
    </h2>
  </div>
);
