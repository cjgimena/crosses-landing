import type { HTMLAttributes, ReactNode } from 'react';
import './controls.css';

export interface PriceProps extends HTMLAttributes<HTMLSpanElement> {
  /** The amount, already formatted with its symbol, e.g. `"$24"`. */
  amount: ReactNode;
  /** What the amount buys, e.g. `"4 tags"`. Set in mono, uppercase. */
  unit?: ReactNode;
}

/**
 * A right-aligned amount with a mono unit caption under it.
 *
 * The amount is tabular-figured so it doesn't jitter as a `Stepper` changes it.
 */
export function Price({ amount, unit, className, ...rest }: PriceProps) {
  return (
    <span className={['price', className].filter(Boolean).join(' ')} {...rest}>
      <span className="amt">{amount}</span>
      {unit ? <span className="unit">{unit}</span> : null}
    </span>
  );
}
