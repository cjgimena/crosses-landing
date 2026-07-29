import { Step, Three } from '@crosses/ui';

export const Default = () => (
  <Step label="02 · String">
    A timer runs while you work and rides the Lock Screen. Extend it if the job is bigger than you
    thought.
  </Step>
);

/** The live step stamps in --orange-deep. At most one in a set. */
export const Live = () => (
  <Step label="01 · Tap" live>
    Hold your phone to the tag on the machine. Crosses opens on it and claims it for you, even from
    the lock screen.
  </Step>
);

export const TheFullSequence = () => (
  <Three>
    <Step label="01 · Tap" live>
      Hold your phone to the tag on the machine. Crosses opens on it and claims it for you.
    </Step>
    <Step label="02 · String">
      A timer runs while you work and rides the Lock Screen. Extend it if the job is bigger than you
      thought.
    </Step>
    <Step label="03 · Log">
      Done frees the machine for the room the same second, and writes the job into the room's
      history.
    </Step>
  </Three>
);
