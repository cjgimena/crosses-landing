import type { HTMLAttributes, ReactNode } from 'react';
import './controls.css';

export interface ButtonLineProps extends HTMLAttributes<HTMLSpanElement> {
  /** The main label, e.g. a platform name. */
  children?: ReactNode;
  /** The mono status stamp beside it, e.g. "Coming soon". */
  badge?: ReactNode;
}

/**
 * A control-shaped statement of fact: same 46px height as `ButtonSolid`, outline
 * instead of fill, and **not interactive**.
 *
 * It renders a `<span>` on purpose. It states the platform and its status next to
 * the real action; making it clickable would promise something it can't do.
 */
export function ButtonLine({ children, badge, className, ...rest }: ButtonLineProps) {
  return (
    <span className={['btn-line', className].filter(Boolean).join(' ')} {...rest}>
      {children}
      {badge ? <span className="soon">{badge}</span> : null}
    </span>
  );
}
