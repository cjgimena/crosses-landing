import type { HTMLAttributes, ReactNode } from 'react';
import './brand.css';

export interface WordmarkProps extends HTMLAttributes<HTMLSpanElement> {
  /** The word itself. Lowercase in source; the type sets it uppercase. @default 'crosses' */
  children?: ReactNode;
}

/**
 * The Crosses wordmark.
 *
 * Set in the system monospace (SF Mono on Apple platforms) rather than in the
 * body face — the app's own logo treatment. The trailing `text-indent` matches
 * the tracking so the word stays optically centred under the mark.
 */
export function Wordmark({ children = 'crosses', className, ...rest }: WordmarkProps) {
  return (
    <span className={['wordmark', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </span>
  );
}
