import type { HTMLAttributes, ReactNode } from 'react';
import './tags.css';

export interface ForksProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * A two-column grid for setting one thing against another — the explanation on
 * the left, the object it describes on the right. Collapses to one column under
 * 900px, explanation first.
 */
export function Forks({ children, className, ...rest }: ForksProps) {
  return (
    <div className={['forks', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
