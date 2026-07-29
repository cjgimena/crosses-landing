import type { HTMLAttributes, ReactNode } from 'react';
import '../styles/base.css';

export interface ShellProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * The measure: 1180px max, centred, with the responsive page gutter (`--pad`).
 *
 * `Band`, `Hero`, the masthead bar and the footer bar all carry this measure
 * themselves — reach for `Shell` only for a section that isn't one of those.
 */
export function Shell({ children, className, ...rest }: ShellProps) {
  return (
    <div className={['shell', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
