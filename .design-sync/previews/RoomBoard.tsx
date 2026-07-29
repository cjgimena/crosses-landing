import { RoomBoard } from '@crosses/ui';

/** The board as the page ships it: one free, one running, one held. */
export const Default = () => (
  <RoomBoard
    date="Wednesday, July 22nd"
    aria-label="The team-room board. Machine 01 is free, Machine 02 is in use by Mia with 24 minutes left, Machine 03 is booked for 4:00."
    machines={[
      { machine: 'Machine 01', model: 'WISE 2086', status: { kind: 'free', label: 'Free now' } },
      {
        machine: 'Machine 02',
        model: 'GAMMA X-ELS',
        status: { kind: 'inuse', label: 'Mia · 24m left', left: 42, width: 16 },
      },
      {
        machine: 'Machine 03',
        model: 'BABOLAT STAR 5',
        status: { kind: 'booked', label: 'Booked 4:00', left: 64, width: 15 },
      },
    ]}
  />
);

/** Later the same afternoon — the state moved with nobody maintaining it. */
export const WithYourWindow = () => (
  <RoomBoard
    date="Wednesday, July 22nd"
    aria-label="The team-room board. Machine 01 is held by you for 45 minutes, Machine 02 is free, Machine 03 is in use by the coach."
    machines={[
      {
        machine: 'Machine 01',
        model: 'WISE 2086',
        status: { kind: 'mine', label: 'You · 45m', left: 50, width: 14 },
      },
      { machine: 'Machine 02', model: 'GAMMA X-ELS', status: { kind: 'free', label: 'Free now' } },
      {
        machine: 'Machine 03',
        model: 'BABOLAT STAR 5',
        status: { kind: 'inuse', label: 'Coach · 30m', left: 65, width: 14 },
      },
    ]}
  />
);

/** A bigger room. The lane grid holds; nothing about the board is three-specific. */
export const ASixMachineRoom = () => (
  <RoomBoard
    title="Varsity Room"
    date="Thursday, July 23rd"
    aria-label="Varsity room board with six machines in mixed states."
    machines={[
      { machine: 'Machine 01', model: 'WISE 2086', status: { kind: 'free', label: 'Free now' } },
      {
        machine: 'Machine 02',
        model: 'GAMMA X-ELS',
        status: { kind: 'inuse', label: 'Mia · 24m left', left: 42, width: 16 },
      },
      {
        machine: 'Machine 03',
        model: 'BABOLAT STAR 5',
        status: { kind: 'booked', label: 'Booked 4:00', left: 64, width: 15 },
      },
      {
        machine: 'Machine 04',
        model: 'WISE 2086',
        status: { kind: 'mine', label: 'You · 45m', left: 50, width: 14 },
      },
      { machine: 'Machine 05', model: 'GAMMA 6004', status: { kind: 'free', label: 'Free now' } },
      {
        machine: 'Machine 06',
        model: 'BABOLAT STAR 5',
        status: { kind: 'booked', label: 'Booked 5:30', left: 78, width: 12 },
      },
    ]}
  />
);

/** Without the key and the live tag — a compact embed. */
export const Bare = () => (
  <RoomBoard
    legend={false}
    live={false}
    date="Wednesday, July 22nd"
    aria-label="Compact team-room board without a key."
    machines={[
      { machine: 'Machine 01', model: 'WISE 2086', status: { kind: 'free', label: 'Free now' } },
      {
        machine: 'Machine 02',
        model: 'GAMMA X-ELS',
        status: { kind: 'inuse', label: 'Mia · 24m left', left: 42, width: 16 },
      },
    ]}
  />
);
