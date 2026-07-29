import type { HTMLAttributes } from 'react';
import './tags.css';

export interface SlotGridProps extends HTMLAttributes<HTMLDivElement> {
  /** How many slots exist in total. @default 8 */
  total?: number;
  /** How many are filled, counted from the left. */
  active: number;
}

/**
 * A row of numbered slots that light up in the accent as a count rises.
 *
 * It is the `Stepper`'s number said a second way — shape as well as digit, so a
 * quantity is legible at a glance rather than read. Decorative by construction:
 * the count is already announced by the stepper, so this is `aria-hidden`.
 */
export function SlotGrid({ total = 8, active, className, ...rest }: SlotGridProps) {
  return (
    <div className={['slots', className].filter(Boolean).join(' ')} aria-hidden="true" {...rest}>
      {Array.from({ length: total }, (_, i) => (
        <span key={i} className={['slot', i < active && 'is-on'].filter(Boolean).join(' ')}>
          {String(i + 1).padStart(2, '0')}
        </span>
      ))}
    </div>
  );
}
