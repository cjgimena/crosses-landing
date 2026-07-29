import type { HTMLAttributes, ReactNode } from 'react';
import './access.css';

export interface AccessProps extends HTMLAttributes<HTMLDivElement> {
  /** The ask, as a statement rather than a command. */
  heading: ReactNode;
  /** Why it's worth doing, in two sentences. */
  lead?: ReactNode;
  /** The form, and usually a `FinePrint` under it. */
  children?: ReactNode;
}

/**
 * The closing ask: rule, Archivo heading, lead, and one thing to do.
 *
 * Capped at 620px — narrower than every other band, so the page visibly narrows
 * to a single decision at the end. Exactly one action belongs in here.
 */
export function Access({ heading, lead, children, className, ...rest }: AccessProps) {
  return (
    <div className={['access', className].filter(Boolean).join(' ')} {...rest}>
      <h2>{heading}</h2>
      {lead ? <p className="lead">{lead}</p> : null}
      {children}
    </div>
  );
}
