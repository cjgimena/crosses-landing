import type { HTMLAttributes, ReactNode } from 'react';
import { Card } from '../layout/Card';
import { DoneButton } from './DoneButton';
import { ExtendGrid } from './ExtendGrid';
import { Meter } from './Meter';
import './session.css';

export interface SessionScreenProps extends HTMLAttributes<HTMLDivElement> {
  /** Left side of the header stamp, e.g. `"MACHINE 02 · GAMMA X-ELS"`. Set in mono, uppercase. */
  machine: string;
  /** Right side of the header stamp, dimmed, e.g. `"STARTED 3:12 PM · FINISH ~3:57 PM"`. */
  timing?: string;
  /** The orange kicker above the clock. @default "YOU'RE STRINGING" */
  kicker?: ReactNode;
  /** The clock itself, e.g. `"24:00"`. Already formatted — this component doesn't count. */
  timer: ReactNode;
  /** The line under the clock. @default 'left on your estimate' */
  sub?: ReactNode;
  /** How much of the estimate is used, `0`–`1`. Omit to hide the meter. */
  progress?: number;
  /** Fires when the finish control is pressed. Omit to render the screen inert. */
  onDone?: () => void;
  /** Fires with the chosen extension in minutes. Omit to render the row inert. */
  onExtend?: (minutes: number) => void;
  /** What a screen reader announces for the whole screen. */
  'aria-label': string;
}

/**
 * The stringing screen: what's running, how long is left, and the two things you
 * can do about it.
 *
 * Shown flat and at real scale — no phone frame, no device chrome. The clock is
 * the largest thing in the system after the hero headline, because when you're
 * standing at a machine it's the only number that matters. Like `RoomBoard`, it
 * is exposed as a single labelled image.
 */
export function SessionScreen({
  machine,
  timing,
  kicker = "YOU'RE STRINGING",
  timer,
  sub = 'left on your estimate',
  progress,
  onDone,
  onExtend,
  className,
  ...rest
}: SessionScreenProps) {
  return (
    <Card className={['session', className].filter(Boolean).join(' ')} role="img" {...rest}>
      <div className="head" aria-hidden="true">
        <span className="mono">{machine}</span>
        {timing ? <span className="mono dim">{timing}</span> : null}
      </div>

      <div className="body" aria-hidden="true">
        <div className="stat">
          <span className="kicker">{kicker}</span>
          <span className="timer">{timer}</span>
          {sub ? <span className="sub">{sub}</span> : null}
          {progress !== undefined ? <Meter value={progress} /> : null}
        </div>

        <div className="controls">
          <DoneButton static={!onDone} onClick={onDone} />
          <span className="more">NEED MORE TIME?</span>
          <ExtendGrid onSelect={onExtend} />
        </div>
      </div>
    </Card>
  );
}
