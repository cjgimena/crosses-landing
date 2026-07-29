import type { HTMLAttributes, ReactNode } from 'react';
import './access.css';

export interface ConfirmProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
}

/**
 * The receipt: a checked, centred slab that replaces a form once it has done its
 * job.
 *
 * Grey, not orange — the accent means live or yours, and a completed action is
 * neither. Name the thing that will happen next ("Invite lands at …") rather than
 * congratulating the reader.
 */
export function Confirm({ children, className, ...rest }: ConfirmProps) {
  return (
    <div className={['confirm', className].filter(Boolean).join(' ')} {...rest}>
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.4"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M20 6 9 17l-5-5" />
      </svg>
      <span>{children}</span>
    </div>
  );
}
