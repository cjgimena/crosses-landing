import type { HTMLAttributes, ReactNode } from 'react';
import './layout.css';

export interface BandProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
}

/**
 * A page section at the shell measure, with the standard bottom rhythm.
 *
 * One idea per band — the page's folds are The room, A session, Tags, Access,
 * and no fold repeats another. Give it an `id` so the nav can reach it.
 */
export function Band({ children, className, ...rest }: BandProps) {
  return (
    <section className={['band', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </section>
  );
}
