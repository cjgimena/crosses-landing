import type { AnchorHTMLAttributes, ReactNode } from 'react';
import './controls.css';

export interface TagLinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children?: ReactNode;
}

/**
 * The quiet forward link: `--orange-deep` label with an arrow that steps right on
 * hover.
 *
 * This is the one text link allowed to carry the accent, and it uses the darkened
 * variant so it clears 4.5:1 as small text. Reserve it for moving someone onward.
 */
export function TagLink({ children, className, ...rest }: TagLinkProps) {
  return (
    <a className={['tag-link', className].filter(Boolean).join(' ')} {...rest}>
      {children}
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M5 12h13M12 5l7 7-7 7" />
      </svg>
    </a>
  );
}
