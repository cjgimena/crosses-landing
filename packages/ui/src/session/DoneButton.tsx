import { createElement } from 'react';
import type { ButtonHTMLAttributes, ReactNode } from 'react';
import './session.css';

export interface DoneButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  /**
   * Render as a plain `<span>` — for the demo screens, where the control is being
   * shown rather than offered. @default false
   */
  static?: boolean;
}

/**
 * The finish control: full-width ink fill with a check, 10px radius.
 *
 * Its label says what happens to everyone else ("free the machine"), not what
 * happens to the button. That is the product's whole point — finishing is an act
 * that changes the room.
 */
export function DoneButton({
  children = "I'm done, free the machine",
  static: isStatic = false,
  className,
  ...rest
}: DoneButtonProps) {
  const cls = ['done', className].filter(Boolean).join(' ');
  const icon = (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm-1.1 14.3-4-4 1.6-1.6 2.4 2.4 5.2-5.2 1.6 1.6Z" />
    </svg>
  );
  if (isStatic) {
    return createElement('span', { className: cls, ...(rest as object) }, icon, children);
  }
  return (
    <button type="button" className={cls} {...rest}>
      {icon}
      {children}
    </button>
  );
}
