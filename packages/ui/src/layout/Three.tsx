import type { HTMLAttributes, ReactNode } from 'react';
import './layout.css';

export interface ThreeProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * A three-column grid, single column under 900px. The system's only multi-column
 * content grid — used for the room's `Note`s and the session's `Step`s.
 */
export function Three({ children, className, ...rest }: ThreeProps) {
  return (
    <div className={['three', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
