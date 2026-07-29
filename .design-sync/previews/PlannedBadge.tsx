import { PlannedBadge } from '@crosses/ui';

export const Default = () => <PlannedBadge />;

export const CustomLabel = () => <PlannedBadge>In testing</PlannedBadge>;

/** Beside the title it labels, which is the only place it belongs. */
export const BesideATitle = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
    <b style={{ fontSize: 16, letterSpacing: '-.02em' }}>Printed tags</b>
    <PlannedBadge />
  </div>
);
