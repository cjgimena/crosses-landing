/**
 * What a machine is doing right now.
 *
 * Status is never encoded by colour alone — each kind carries a label and a
 * distinct shape as well, so the board is readable without colour vision.
 *
 * - `free` — nobody on it. No bar.
 * - `inuse` — someone is stringing. Orange bar, filled dot, orange label.
 * - `booked` — held for later by someone else. Grey bar, hollow dot.
 * - `mine` — held for later by you. Grey bar with a white hatch over it.
 */
export type MachineStatusKind = 'free' | 'inuse' | 'booked' | 'mine';

export interface MachineStatus {
  kind: MachineStatusKind;
  /** The status text, e.g. `"Free now"`, `"Mia · 24m left"`, `"Booked 4:00"`. */
  label: string;
  /** Where the bar starts, as a percentage of the day shown. @default 0 */
  left?: number;
  /** How wide the bar is, as a percentage. `0` hides it — the `free` case. @default 0 */
  width?: number;
}
