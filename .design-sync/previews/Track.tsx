import { Track } from '@crosses/ui';

const Row = ({ label, children }: { label: string; children: React.ReactNode }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '86px 1fr', gap: 16, alignItems: 'center' }}>
    <span
      style={{
        fontFamily: 'var(--mono)',
        fontSize: 9,
        letterSpacing: '.14em',
        textTransform: 'uppercase',
        color: 'var(--ink-label)',
      }}
    >
      {label}
    </span>
    {children}
  </div>
);

/** All four states stacked — the bar is the same object, the meaning differs. */
export const EveryState = () => (
  <div style={{ display: 'grid', gap: 14, minWidth: 420 }}>
    <Row label="Free">
      <Track kind="free" />
    </Row>
    <Row label="In use">
      <Track kind="inuse" left={42} width={16} />
    </Row>
    <Row label="Booked">
      <Track kind="booked" left={64} width={15} />
    </Row>
    <Row label="Yours">
      <Track kind="mine" left={50} width={14} />
    </Row>
  </div>
);

export const InUse = () => (
  <div style={{ minWidth: 420 }}>
    <Track kind="inuse" left={42} width={16} />
  </div>
);

/** Yours is grey with a white hatch — a shape difference, not just a colour one. */
export const Yours = () => (
  <div style={{ minWidth: 420 }}>
    <Track kind="mine" left={50} width={14} />
  </div>
);

/**
 * The now hairline can sit anywhere across the day, and the "already gone"
 * shading follows it. Booked here rather than in use, so the block sits after
 * now instead of under it.
 */
export const NowLater = () => (
  <div style={{ minWidth: 420 }}>
    <Track kind="booked" left={82} width={12} now={70} />
  </div>
);
