import type { HTMLAttributes } from 'react';
import type { MachineStatusKind } from './types';
import './room.css';

export interface TrackProps extends HTMLAttributes<HTMLSpanElement> {
  /** Drives the bar's colour and hatch. @default 'free' */
  kind?: MachineStatusKind;
  /** Where the bar starts, as a percentage. @default 0 */
  left?: number;
  /** How wide the bar is, as a percentage. `0` hides it. @default 0 */
  width?: number;
  /** Position of the "now" hairline, as a percentage. @default 48 */
  now?: number;
}

/**
 * One machine's day as a bar: what's already gone, the block that's booked or
 * running, and the orange hairline marking now.
 *
 * The block moves by animating a `clip-path` window over a full-width bar, not by
 * animating `left`/`width` — one composited property, so it slides cleanly, and
 * `round 5px` keeps proper rounded ends at any width.
 */
export function Track({ kind = 'free', left = 0, width = 0, now = 48, className, style, ...rest }: TrackProps) {
  const rightInset = Math.max(0, 100 - left - width);
  const clip = `inset(0 ${rightInset}% 0 ${left}% round 5px)`;

  return (
    <span className={['track', `is-${kind}`, className].filter(Boolean).join(' ')} style={style} {...rest}>
      {/* "Already gone" ends where now is — the two are the same edge, so the
          shading has to follow the hairline rather than sit at a fixed 48%. */}
      <span className="past" style={{ width: `${now}%` }} />
      <span
        className="fill"
        style={{ clipPath: clip, WebkitClipPath: clip, opacity: width ? 1 : 0 }}
      />
      <span className="now" style={{ left: `${now}%` }} />
    </span>
  );
}
