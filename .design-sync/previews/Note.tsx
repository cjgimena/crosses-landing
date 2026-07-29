import { Note, Three } from '@crosses/ui';

export const Default = () => (
  <Note heading="One accent, one meaning">
    Orange marks what is live right now, or what is yours. Nothing else is ever orange, so the room
    reads the same way every time you look at it.
  </Note>
);

export const HeadingOnly = () => <Note heading="Finish and free it" />;

/** Three in a row is how they're used — the standard "and here are the three things". */
export const AsATrio = () => (
  <Three>
    <Note heading="One accent, one meaning">
      Orange marks what is live right now, or what is yours.
    </Note>
    <Note heading="Hold a window">
      Request a time on a specific machine and get a reminder before it starts.
    </Note>
    <Note heading="Finish and free it">
      Tap done and the machine frees for everyone immediately.
    </Note>
  </Three>
);
