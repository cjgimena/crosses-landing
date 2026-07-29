import type { HTMLAttributes } from 'react';
import './session.css';

export interface MeterProps extends HTMLAttributes<HTMLSpanElement> {
  /** How far along, `0`–`1`. Values outside the range are clamped. */
  value: number;
}

/**
 * A 5px progress hairline in the accent — how much of an estimate has been used.
 *
 * It scales on the X axis rather than animating width, so it stays on the
 * compositor and can tick every second without costing layout.
 */
export function Meter({ value, className, ...rest }: MeterProps) {
  const clamped = Math.min(1, Math.max(0, value));
  return (
    <span className={['meter', className].filter(Boolean).join(' ')} {...rest}>
      <i style={{ transform: `scaleX(${clamped.toFixed(3)})` }} />
    </span>
  );
}
