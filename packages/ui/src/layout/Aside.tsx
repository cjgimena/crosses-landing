import type { HTMLAttributes, ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';
import './layout.css';

export interface AsideProps extends HTMLAttributes<HTMLDivElement> {
  /** The instrument label above the heading, e.g. "The room". */
  eyebrow: ReactNode;
  /** The section heading — a short declarative sentence, ending in a full stop. */
  heading: ReactNode;
  /** One paragraph of support. Anything longer belongs in the content column. */
  children?: ReactNode;
}

/**
 * The left column of a `Split`: eyebrow, heading, one paragraph.
 *
 * This is the system's section header. The heading is set in Archivo at 22px —
 * deliberately smaller than the content beside it, because the aside labels the
 * fold, it doesn't compete with it.
 */
export function Aside({ eyebrow, heading, children, className, ...rest }: AsideProps) {
  return (
    <div className={['aside', className].filter(Boolean).join(' ')} {...rest}>
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2>{heading}</h2>
      {children ? <p>{children}</p> : null}
    </div>
  );
}
