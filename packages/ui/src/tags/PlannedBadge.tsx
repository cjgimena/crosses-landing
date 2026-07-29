import type { HTMLAttributes, ReactNode } from 'react';
import './tags.css';

export interface PlannedBadgeProps extends HTMLAttributes<HTMLSpanElement> {
  children?: ReactNode;
}

/**
 * A mono stamp on a faint orange tint, marking something that doesn't exist yet.
 *
 * The label is set in `--orange-deep` rather than `--orange` so it clears 4.5:1
 * against its own tint — this is the one place accent-on-accent is allowed, and
 * only because the darkened step makes it legible.
 */
export function PlannedBadge({ children = 'Planned', className, ...rest }: PlannedBadgeProps) {
  return (
    <span className={['planned', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </span>
  );
}
