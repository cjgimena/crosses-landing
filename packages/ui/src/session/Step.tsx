import type { HTMLAttributes, ReactNode } from 'react';
import './session.css';

export interface StepProps extends HTMLAttributes<HTMLDivElement> {
  /** The stamp, e.g. `"01 · Tap"`. Number, separator, verb. */
  label: ReactNode;
  /** Mark this as the step happening now — turns the stamp `--orange-deep`. */
  live?: boolean;
  children?: ReactNode;
}

/**
 * A numbered step in a sequence, stamped in mono like a label on a machine.
 *
 * At most one step in a set should be `live` — that is the accent doing its one
 * job, and two live steps would break the rule the whole system rests on.
 */
export function Step({ label, live = false, children, className, ...rest }: StepProps) {
  return (
    <div className={['step', live && 'is-live', className].filter(Boolean).join(' ')} {...rest}>
      <span className="n">{label}</span>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
