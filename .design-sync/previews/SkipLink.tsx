import { SkipLink } from '@crosses/ui';

/**
 * The skip link sits at `left: -9999px` until it takes focus, so the only state
 * worth showing is the focused one. Focus can't be held in a static capture —
 * this pins it to the position `:focus` puts it in.
 */
export const Focused = () => (
  <div style={{ position: 'relative', height: 60, transform: 'translateZ(0)' }}>
    <SkipLink style={{ left: 0 }} />
  </div>
);
