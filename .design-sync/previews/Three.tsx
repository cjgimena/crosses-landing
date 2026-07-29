import { Note, Step, Three } from '@crosses/ui';

/** Three notes under a board — the room fold. */
export const Notes = () => (
  <Three>
    <Note heading="One accent, one meaning">
      Orange marks what is live right now, or what is yours. Nothing else is ever orange.
    </Note>
    <Note heading="Hold a window">
      Request a time on a specific machine and get a reminder before it starts.
    </Note>
    <Note heading="Finish and free it">
      Tap done and the machine frees for everyone immediately. The job drops into history.
    </Note>
  </Three>
);

/** The same grid carrying the session's three steps. */
export const Steps = () => (
  <Three>
    <Step label="01 · Tap" live>
      Hold your phone to the tag on the machine. Crosses opens on it and claims it for you.
    </Step>
    <Step label="02 · String">
      A timer runs while you work and rides the Lock Screen.
    </Step>
    <Step label="03 · Log">
      Done frees the machine for the room the same second.
    </Step>
  </Three>
);
