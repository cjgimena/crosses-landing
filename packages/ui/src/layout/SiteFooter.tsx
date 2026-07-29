import type { HTMLAttributes, ReactNode } from 'react';
import './layout.css';

export interface SiteFooterProps extends HTMLAttributes<HTMLElement> {
  /** The bar's contents — a small `Lockup` and a `<nav>` of links. */
  children?: ReactNode;
  /** The fine line below, e.g. the copyright. Takes the full width of the bar. */
  fine?: ReactNode;
}

/**
 * The page footer: a hairline rule, the small lockup, the links, and one fine
 * line. Deliberately the quietest surface in the system — nothing here is orange.
 */
export function SiteFooter({ children, fine, className, ...rest }: SiteFooterProps) {
  return (
    <footer className={['site-footer', className].filter(Boolean).join(' ')} {...rest}>
      <div className="bar">
        {children}
        {fine ? <p className="fine">{fine}</p> : null}
      </div>
    </footer>
  );
}
