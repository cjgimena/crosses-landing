import type { HTMLAttributes, ReactNode } from 'react';
import '../styles/tokens.css';
import '../styles/base.css';

export interface CrossesRootProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /**
   * Opt into the entrance animations. Components marked `reveal` stay invisible
   * until they scroll in — which is only safe once something is running to add
   * `in`. Leave this off (the default) and every component renders visible, which
   * is what static renders and no-JS pages need.
   *
   * @default false
   */
  animated?: boolean;
}

/**
 * The required root wrapper for anything built with Crosses.
 *
 * Every other component inherits its tokens, background, type and focus rings
 * from here — mount one at the top of the tree and put the whole page inside it.
 * Without it, components render with no token values at all: unstyled text on a
 * transparent ground.
 */
export function CrossesRoot({ children, animated = false, className, ...rest }: CrossesRootProps) {
  return (
    <div className={['crx-root', animated && 'js', className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </div>
  );
}
