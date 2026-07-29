import { Aside, RoomBoard, Split, Three, Step } from '@crosses/ui';

/** The canonical fold: aside on the left, the product on the right. */
export const WithABoard = () => (
  <Split>
    <Aside eyebrow="The room" heading="Status nobody has to maintain.">
      State comes from what people are doing on the machines. It changes the second someone
      finishes: no sign-up sheet, no asking the group chat.
    </Aside>
    <RoomBoard
      date="Wednesday, July 22nd"
      aria-label="Team room board: Machine 01 free, Machine 02 in use by Mia, Machine 03 booked."
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
  </Split>
);

export const WithSteps = () => (
  <Split>
    <Aside eyebrow="A session" heading="Three moves, every time.">
      The same three, which is why they're on the mark. Tap, string, log.
    </Aside>
    <Three>
      <Step label="01 · Tap" live>
        Hold your phone to the tag on the machine.
      </Step>
      <Step label="02 · String">A timer runs while you work.</Step>
      <Step label="03 · Log">Done frees the machine for the room.</Step>
    </Three>
  </Split>
);
