import type { HTMLAttributes, ReactNode } from 'react';
import './layout.css';

export interface NavProps extends HTMLAttributes<HTMLElement> {
  /** The `NavLink`s. Hidden below 900px — the action stays. */
  children?: ReactNode;
  /** Trailing control, kept visible at every width. Usually a `ButtonOutline`. */
  action?: ReactNode;
  /** @default 'Primary' */
  'aria-label'?: string;
}

/**
 * The masthead's navigation: a row of links that collapses below 900px, plus one
 * action that never collapses. The links are a convenience; the action is the
 * job, so it survives the breakpoint.
 */
export function Nav({ children, action, className, 'aria-label': ariaLabel = 'Primary', ...rest }: NavProps) {
  return (
    <nav className={['nav', className].filter(Boolean).join(' ')} aria-label={ariaLabel} {...rest}>
      <span className="links">{children}</span>
      {action}
    </nav>
  );
}
