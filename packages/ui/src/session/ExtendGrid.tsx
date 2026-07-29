import type { HTMLAttributes } from 'react';
import './session.css';

export interface ExtendGridProps extends Omit<HTMLAttributes<HTMLSpanElement>, 'onSelect'> {
  /** Minute offsets to offer. @default [5, 10, 15, 30] */
  options?: number[];
  /** Fires with the chosen number of minutes. Omit to render a static display. */
  onSelect?: (minutes: number) => void;
}

/**
 * The four-up row of time extensions: +5, +10, +15, +30.
 *
 * Four fixed amounts rather than a picker, because the answer is always "a bit
 * more" and nobody standing at a machine wants to type a number. Without
 * `onSelect` it renders as inert spans, for the demo screens.
 */
export function ExtendGrid({ options = [5, 10, 15, 30], onSelect, className, ...rest }: ExtendGridProps) {
  return (
    <span className={['extends', className].filter(Boolean).join(' ')} {...rest}>
      {options.map((m) =>
        onSelect ? (
          <button key={m} type="button" onClick={() => onSelect(m)} aria-label={`Add ${m} minutes`}>
            +{m}
          </button>
        ) : (
          <span key={m}>+{m}</span>
        ),
      )}
    </span>
  );
}
