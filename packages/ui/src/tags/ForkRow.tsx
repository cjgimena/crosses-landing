import type { HTMLAttributes, ReactNode } from 'react';
import './tags.css';

export interface ForkRowProps extends HTMLAttributes<HTMLDivElement> {
  /**
   * Mark this as the path that ends up inside the product. Turns the pin orange —
   * "yours" in the accent's vocabulary. At most one row in a fork.
   */
  live?: boolean;
  children?: ReactNode;
}

/**
 * One branch of an either/or, pinned by a dot.
 *
 * Used in pairs to lay out a fork in behaviour — with the app installed versus
 * without it. Lead the text with a bolded condition (`<b>With Crosses
 * installed,</b>`) so the two rows can be scanned against each other.
 */
export function ForkRow({ live = false, children, className, ...rest }: ForkRowProps) {
  return (
    <div className={['fork-row', live && 'is-live', className].filter(Boolean).join(' ')} {...rest}>
      <span className="pin" aria-hidden="true" />
      <span className="t">{children}</span>
    </div>
  );
}
