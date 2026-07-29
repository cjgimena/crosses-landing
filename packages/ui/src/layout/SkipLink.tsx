import type { AnchorHTMLAttributes, ReactNode } from 'react';
import './layout.css';

export interface SkipLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Target of the skip. @default '#top' */
  href?: string;
  children?: ReactNode;
}

/**
 * Off-screen until focused, then it flies into the top-left corner.
 *
 * First element in the body, always — full keyboard operability is a stated
 * requirement of the system, not an option.
 */
export function SkipLink({ href = '#top', children = 'Skip to content', className, ...rest }: SkipLinkProps) {
  return (
    <a className={['skip', className].filter(Boolean).join(' ')} href={href} {...rest}>
      {children}
    </a>
  );
}
