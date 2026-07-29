import { Meter } from '@crosses/ui';

const Row = ({ label, value }: { label: string; value: number }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '54px 1fr', gap: 16, alignItems: 'center' }}>
    <span
      style={{
        fontFamily: 'var(--mono)',
        fontSize: 9,
        letterSpacing: '.14em',
        color: 'var(--ink-label)',
      }}
    >
      {Math.round(value * 100)}%
    </span>
    <Meter value={value} aria-label={label} />
  </div>
);

/** The estimate filling up, start to finish. */
export const Progression = () => (
  <div style={{ display: 'grid', gap: 16, minWidth: 420 }}>
    <Row label="just started" value={0} />
    <Row label="a quarter in" value={0.25} />
    <Row label="about half" value={0.47} />
    <Row label="nearly done" value={0.86} />
    <Row label="finished" value={1} />
  </div>
);

export const Default = () => (
  <div style={{ minWidth: 420 }}>
    <Meter value={0.47} />
  </div>
);
