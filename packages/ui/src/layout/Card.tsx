import type { HTMLAttributes, ReactNode } from 'react';
import './layout.css';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * The one surface treatment in the system: white on the off-white ground, a
 * hairline border, 14px radius. No shadow — depth comes from the surface change.
 *
 * `RoomBoard`, `SessionScreen` and `TagCard` are all Cards with a body inside.
 */
export function Card({ children, className, ...rest }: CardProps) {
  return (
    <div className={['card', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
