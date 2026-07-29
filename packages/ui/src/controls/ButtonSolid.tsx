import { createElement } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './controls.css';

export interface ButtonSolidProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render as a link instead of a button. */
  href?: string;
  children?: ReactNode;
}

/**
 * The primary action: ink fill, 46px tall, one per view.
 *
 * Deliberately not orange — the accent is reserved for status, so the loudest
 * control in the system is the darkest thing on the page rather than the most
 * colourful. Pass `href` to render an anchor.
 */
export function ButtonSolid({ href, children, className, ...rest }: ButtonSolidProps) {
  const cls = ['btn-solid', className].filter(Boolean).join(' ');
  if (href !== undefined) {
    return createElement('a', { className: cls, href, ...(rest as object) }, children);
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
