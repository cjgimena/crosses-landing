import type { AnchorHTMLAttributes } from 'react';
import { CrossesMark } from './CrossesMark';
import { Wordmark } from './Wordmark';
import './brand.css';

export interface LockupProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Where the lockup links. @default '#top' */
  href?: string;
  /** `'md'` is the masthead scale (24px mark); `'sm'` is the footer scale (20px). @default 'md' */
  size?: 'md' | 'sm';
  /** Surface the mark's weave knocks out to. @default 'var(--bg)' */
  knockout?: string;
}

/**
 * Mark plus wordmark, locked to the spacing in the brand spec.
 *
 * This is the only sanctioned pairing of the two — don't re-space them by hand.
 * On hover the orange vertical deepens to `--orange-deep`, the single piece of
 * accent feedback in the header.
 */
export function Lockup({
  href = '#top',
  size = 'md',
  knockout,
  className,
  'aria-label': ariaLabel = 'Crosses, home',
  ...rest
}: LockupProps) {
  return (
    <a
      className={['lockup', size === 'sm' && 'is-sm', className].filter(Boolean).join(' ')}
      href={href}
      aria-label={ariaLabel}
      {...rest}
    >
      <CrossesMark knockout={knockout} />
      <Wordmark />
    </a>
  );
}
