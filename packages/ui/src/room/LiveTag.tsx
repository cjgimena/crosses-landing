import type { HTMLAttributes, ReactNode } from 'react';
import './room.css';

export interface LiveTagProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

/**
 * A pulsing orange dot and a mono label, marking a surface whose contents update
 * on their own.
 *
 * The pulse only runs under an `animated` root, and stops entirely under
 * `prefers-reduced-motion` — the dot stays, because it is carrying meaning, not
 * decoration.
 */
export function LiveTag({ children = 'Live', className, ...rest }: LiveTagProps) {
  return (
    <span className={['live-tag', className].filter(Boolean).join(' ')} {...rest}>
      <span className="beat" />
      {children}
    </span>
  );
}
