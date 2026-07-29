import type { HTMLAttributes, ReactNode } from 'react';
import './tags.css';

export interface UrlCodeProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/**
 * A URL shown as a specimen, in mono on a white strip.
 *
 * Wrap the part that varies in `<b>` and it comes out in `--orange-deep` — this
 * is "yours" applied to a string: `crossesapp.com/m/<b>4f2a9c</b>`. Scrolls
 * horizontally rather than wrapping, because a broken URL reads as two URLs.
 */
export function UrlCode({ children, className, ...rest }: UrlCodeProps) {
  return (
    <code className={['url', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </code>
  );
}
