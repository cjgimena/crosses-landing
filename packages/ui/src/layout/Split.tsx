import type { HTMLAttributes, ReactNode } from 'react';
import './layout.css';

export interface SplitProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * The section grid: a 260px aside on the left, the content on the right, with a
 * hairline rule across the top. Collapses to one column under 900px.
 *
 * Pass exactly two children — an `Aside` and the content block.
 */
export function Split({ children, className, ...rest }: SplitProps) {
  return (
    <div className={['split', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
