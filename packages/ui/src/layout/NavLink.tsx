import type { AnchorHTMLAttributes, ReactNode } from 'react';
import './layout.css';

export interface NavLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Draws the orange underline and lifts the label to full ink. */
  active?: boolean;
  children?: ReactNode;
}

/**
 * A masthead nav link. The active one grows an orange underline from the left —
 * one of the few places the accent marks "you are here" rather than "live".
 *
 * Drive `active` from `useActiveSection`, which watches the sections the links
 * point at.
 */
export function NavLink({ active = false, children, className, ...rest }: NavLinkProps) {
  return (
    <a className={['navlink', active && 'is-active', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </a>
  );
}
