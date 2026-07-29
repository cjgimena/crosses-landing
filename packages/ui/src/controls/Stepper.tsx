import { useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import './controls.css';

export interface StepperProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /** Controlled value. Omit to let the stepper hold its own. */
  value?: number;
  /** Starting value when uncontrolled. @default 1 */
  defaultValue?: number;
  /** @default 1 */
  min?: number;
  /** @default 8 */
  max?: number;
  /** Fires with the new value on every press. */
  onChange?: (value: number) => void;
  /** Id of the label describing what is being counted, for `aria-labelledby`. */
  labelledBy?: string;
  /** Accessible name for the decrement button. @default 'Fewer' */
  decLabel?: string;
  /** Accessible name for the increment button. @default 'More' */
  incLabel?: string;
  /** Pushed to the far right of the row — normally a `Price`. */
  trailing?: ReactNode;
}

/**
 * A quantity stepper: minus, the count in Archivo at 36px, plus.
 *
 * The count is the largest thing in the row on purpose — it's the number the
 * reader is actually deciding. Both buttons carry an invisible 44×44 tap target
 * while staying visually 36px, and each disables at its end of the range rather
 * than silently clamping.
 */
export function Stepper({
  value,
  defaultValue = 1,
  min = 1,
  max = 8,
  onChange,
  labelledBy,
  decLabel = 'Fewer',
  incLabel = 'More',
  trailing,
  className,
  ...rest
}: StepperProps) {
  const [internal, setInternal] = useState(defaultValue);
  const current = value ?? internal;

  const set = (next: number) => {
    const clamped = Math.min(max, Math.max(min, next));
    if (value === undefined) setInternal(clamped);
    onChange?.(clamped);
  };

  return (
    <div className={['stepper', className].filter(Boolean).join(' ')} {...rest}>
      <button
        type="button"
        className="step-btn"
        aria-label={decLabel}
        disabled={current <= min}
        onClick={() => set(current - 1)}
      >
        &minus;
      </button>
      <span className="qty" aria-live="polite" aria-labelledby={labelledBy}>
        {current}
      </span>
      <button
        type="button"
        className="step-btn"
        aria-label={incLabel}
        disabled={current >= max}
        onClick={() => set(current + 1)}
      >
        +
      </button>
      {trailing ? (
        <>
          <span style={{ flex: 1 }} />
          {trailing}
        </>
      ) : null}
    </div>
  );
}
