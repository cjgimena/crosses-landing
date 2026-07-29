import { useEffect, useRef, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import '../styles/base.css';

export interface RevealProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /**
   * Stagger index. Multiplies a 60ms delay, cycling every three, so a row of
   * three reveals in sequence rather than all at once.
   * @default 0
   */
  index?: number;
}

/**
 * Entrance wrapper: fades and lifts its content in when it scrolls into view.
 *
 * Three guarantees carried over from the page, all of them about never shipping
 * blank: content is visible unless an ancestor `CrossesRoot` has `animated`, an
 * element already on screen reveals in the same frame, and a dead observer is
 * caught by a fallback timer. Under `prefers-reduced-motion` it cross-fades in
 * place instead of moving.
 */
export function Reveal({ children, index = 0, className, style, ...rest }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduced =
      typeof window.matchMedia === 'function' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (reduced || !('IntersectionObserver' in window) || !window.innerHeight) {
      setShown(true);
      return;
    }
    // Anything already on screen reveals immediately — no observer round-trip.
    if (el.getBoundingClientRect().top < window.innerHeight) {
      setShown(true);
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setShown(true);
            io.unobserve(e.target);
          }
        });
      },
      { rootMargin: '0px 0px -6% 0px', threshold: 0.06 },
    );
    io.observe(el);

    // Fallback: if the observer never fires at all, show the content anyway.
    const t = window.setTimeout(() => setShown(true), 3000);
    return () => {
      io.disconnect();
      window.clearTimeout(t);
    };
  }, []);

  return (
    <div
      ref={ref}
      className={['reveal', shown && 'in', className].filter(Boolean).join(' ')}
      style={{ transitionDelay: `${(index % 3) * 60}ms`, ...style }}
      {...rest}
    >
      {children}
    </div>
  );
}
