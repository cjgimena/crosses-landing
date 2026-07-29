import { createElement } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './controls.css';

export interface ButtonOutlineProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Render as a link instead of a button. */
  href?: string;
  children?: ReactNode;
}

/**
 * The secondary action at masthead scale: 34px, hairline border, no fill.
 *
 * This is the control that survives the 900px breakpoint when the nav links
 * collapse, so it should always be the one thing you'd want a visitor to do.
 */
export function ButtonOutline({ href, children, className, ...rest }: ButtonOutlineProps) {
  const cls = ['btn-outline', className].filter(Boolean).join(' ');
  if (href !== undefined) {
    return createElement('a', { className: cls, href, ...(rest as object) }, children);
  }
  return (
    <button className={cls} {...rest}>
      {children}
    </button>
  );
}
