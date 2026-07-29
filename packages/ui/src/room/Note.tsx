import type { HTMLAttributes, ReactNode } from 'react';
import './room.css';

export interface NoteProps extends HTMLAttributes<HTMLDivElement> {
  /** The point, as a short noun phrase — not a sentence. */
  heading: ReactNode;
  /** Two sentences explaining it. */
  children?: ReactNode;
}

/**
 * A rule-topped note. Three of them in a `Three` is the system's way of saying
 * "and here are the three things about that", under a board or a demo.
 */
export function Note({ heading, children, className, ...rest }: NoteProps) {
  return (
    <div className={['note', className].filter(Boolean).join(' ')} {...rest}>
      <h3>{heading}</h3>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
