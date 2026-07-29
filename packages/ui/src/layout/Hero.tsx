import type { HTMLAttributes, ReactNode } from 'react';
import { Eyebrow } from './Eyebrow';
import './layout.css';

export interface HeroProps extends HTMLAttributes<HTMLElement> {
  /** Instrument label above the headline, e.g. "Stringing machines · team rooms". */
  eyebrow?: ReactNode;
  /** The headline. One sentence, ending in a full stop; wraps at 19ch. */
  heading: ReactNode;
  /** The lead paragraph. Two sentences at most, capped at 52ch. */
  lead?: ReactNode;
  /** The call-to-action row — a `ButtonSolid` and usually a `ButtonLine` beside it. */
  children?: ReactNode;
}

/**
 * The page opener: eyebrow, Archivo headline, lead, actions.
 *
 * The headline is the only place the display face runs this large, and it is set
 * at weight 400 with tight tracking — restraint, not shout. Each part carries
 * `reveal`, so under an `animated` root they enter in sequence.
 */
export function Hero({ eyebrow, heading, lead, children, className, ...rest }: HeroProps) {
  return (
    <section className={['hero', className].filter(Boolean).join(' ')} {...rest}>
      {eyebrow ? <Eyebrow className="reveal in">{eyebrow}</Eyebrow> : null}
      <h1 className="reveal in">{heading}</h1>
      {lead ? <p className="lead reveal in">{lead}</p> : null}
      {children ? <div className="cta-row reveal in">{children}</div> : null}
    </section>
  );
}
