import type { HTMLAttributes } from 'react';
import './room.css';

export interface LegendProps extends HTMLAttributes<HTMLDivElement> {
  /** Include the "Now" hairline key, pushed to the far right. @default true */
  showNow?: boolean;
}

/**
 * The board's key: In use, Booked, Yours, and the Now hairline.
 *
 * Each entry pairs a shape with a word, which is what lets the board encode
 * status without relying on colour — "Yours" is the hatched chip, not just a
 * different grey.
 */
export function Legend({ showNow = true, className, ...rest }: LegendProps) {
  return (
    <div className={['legend', className].filter(Boolean).join(' ')} aria-hidden="true" {...rest}>
      <span className="key">
        <span className="chip inuse" />
        In use
      </span>
      <span className="key">
        <span className="chip booked" />
        Booked
      </span>
      <span className="key">
        <span className="chip mine" />
        Yours
      </span>
      {showNow ? (
        <>
          <span className="spacer" />
          <span className="key">
            <span className="chip now" />
            Now
          </span>
        </>
      ) : null}
    </div>
  );
}
