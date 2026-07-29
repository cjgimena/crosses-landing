import type { HTMLAttributes, ReactNode } from 'react';
import './access.css';

export interface FinePrintProps extends HTMLAttributes<HTMLParagraphElement> {
  children?: ReactNode;
}

/**
 * The mono footnote under an ask — platform, requirements, caveats.
 *
 * Set at 9px with wide tracking, the same treatment as an `Eyebrow`: it reads as
 * a spec stamped on the page rather than as small print hiding from you.
 */
export function FinePrint({ children, className, ...rest }: FinePrintProps) {
  return (
    <p className={['fineprint', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </p>
  );
}
