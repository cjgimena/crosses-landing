import type { HTMLAttributes, ReactNode } from 'react';
import './layout.css';

export interface EyebrowProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

/**
 * The section eyebrow — a Martian Mono instrument label, stamped above a heading.
 *
 * This is a named brand element, not decoration: it is how a section announces
 * itself ("The room", "A session", "Machine tags"). Sentence case, never a
 * sentence.
 */
export function Eyebrow({ children, className, ...rest }: EyebrowProps) {
  return (
    <span className={['eyebrow', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </span>
  );
}
