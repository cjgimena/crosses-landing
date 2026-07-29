import type { HTMLAttributes } from 'react';
import { Track } from './Track';
import type { MachineStatus } from './types';
import './room.css';

export interface LaneProps extends HTMLAttributes<HTMLDivElement> {
  /** The machine's name in the room, e.g. `"Machine 02"`. */
  machine: string;
  /** The hardware, in mono, e.g. `"GAMMA X-ELS"`. */
  model?: string;
  /** What it's doing now. */
  status: MachineStatus;
  /** Position of the "now" hairline, as a percentage. @default 48 */
  now?: number;
}

/**
 * One machine, one row: who and what on the left, the day as a bar in the middle,
 * the status on the right.
 *
 * Below 560px it refolds — name and status on the first line, the bar spanning
 * underneath — because the bar is the part that needs the width.
 */
export function Lane({ machine, model, status, now = 48, className, ...rest }: LaneProps) {
  const { kind, label, left = 0, width = 0 } = status;

  return (
    <div className={['lane', `is-${kind}`, className].filter(Boolean).join(' ')} {...rest}>
      <span className="who">
        <b>{machine}</b>
        {model ? <span>{model}</span> : null}
      </span>
      <Track kind={kind} left={left} width={width} now={now} />
      <span className="status">
        <span className="dot" />
        <span className="label">{label}</span>
      </span>
    </div>
  );
}
