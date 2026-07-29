import type { HTMLAttributes } from 'react';
import { Card } from '../layout/Card';
import { Lane } from './Lane';
import { Legend } from './Legend';
import { LiveTag } from './LiveTag';
import type { MachineStatus } from './types';
import './room.css';

export interface RoomBoardMachine {
  /** Row key and the machine's name in the room, e.g. `"Machine 01"`. */
  machine: string;
  /** The hardware, in mono, e.g. `"WISE 2086"`. */
  model?: string;
  status: MachineStatus;
}

export interface RoomBoardProps extends HTMLAttributes<HTMLDivElement> {
  /** Room name. @default 'Team Room' */
  title?: string;
  /** The day being shown, spelled out, e.g. `"Wednesday, July 22nd"`. */
  date?: string;
  /** One row per machine, in room order. */
  machines: RoomBoardMachine[];
  /** Show the key beneath the lanes. @default true */
  legend?: boolean;
  /** Show the pulsing Live tag in the header. @default true */
  live?: boolean;
  /** Position of the "now" hairline across every lane, as a percentage. @default 48 */
  now?: number;
  /**
   * What a screen reader announces for the whole board. The board is presented as
   * a single image because its parts only mean something together — so this has
   * to say what the board says, machine by machine.
   */
  'aria-label': string;
}

/**
 * The team-room board: every shared machine on one surface, with its state.
 *
 * This is the product's central idea rendered at real scale — status that nobody
 * maintains. It is exposed as `role="img"` with one written-out label, and the
 * visual rows are hidden from assistive tech, because reading the grid cell by
 * cell would say much less than the sentence does.
 */
export function RoomBoard({
  title = 'Team Room',
  date,
  machines,
  legend = true,
  live = true,
  now = 48,
  className,
  ...rest
}: RoomBoardProps) {
  return (
    <Card className={['board', className].filter(Boolean).join(' ')} role="img" {...rest}>
      <div className="board-head" aria-hidden="true">
        <span className="title">
          <b>{title}</b>
          {date ? <span>{date}</span> : null}
        </span>
        {live ? <LiveTag /> : null}
      </div>

      <div aria-hidden="true">
        {machines.map((m) => (
          <Lane key={m.machine} machine={m.machine} model={m.model} status={m.status} now={now} />
        ))}
      </div>

      {legend ? <Legend /> : null}
    </Card>
  );
}
