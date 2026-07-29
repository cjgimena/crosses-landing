import { useEffect, useRef } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import './layout.css';

export interface MastheadProps extends HTMLAttributes<HTMLElement> {
  /** The bar's contents — normally a `Lockup` and a `Nav`, spaced apart. */
  children?: ReactNode;
  /**
   * Show the orange scroll-progress hairline along the bottom edge.
   * @default true
   */
  progress?: boolean;
}

/**
 * The fixed masthead.
 *
 * Transparent over the hero, then at 30px of scroll it earns its background: a
 * blurred off-white wash and a hairline rule. The progress bar underneath is the
 * accent doing its one job — it marks now, in the literal sense of how far down
 * the page you are.
 */
export function Masthead({ children, progress = true, className, ...rest }: MastheadProps) {
  const headerRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;
    let raf: number | null = null;

    const onScroll = () => {
      if (raf) return;
      raf = requestAnimationFrame(() => {
        raf = null;
        const y = window.scrollY || 0;
        const vh = window.innerHeight || 1;
        const max = Math.max(1, document.documentElement.scrollHeight - vh);
        header.classList.toggle('is-stuck', y > 30);
        if (progressRef.current) {
          progressRef.current.style.transform = `scaleX(${Math.min(1, y / max)})`;
        }
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <header ref={headerRef} className={['masthead', className].filter(Boolean).join(' ')} {...rest}>
      <div className="bar">{children}</div>
      {progress ? <div ref={progressRef} className="progress" aria-hidden="true" /> : null}
    </header>
  );
}
