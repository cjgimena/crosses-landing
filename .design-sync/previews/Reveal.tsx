import { Note, Reveal, Three } from '@crosses/ui';

/**
 * Reveal is transparent when it isn't animating: content is visible unless an
 * ancestor root opted into motion, which is the "never ship blank" rule. A
 * static capture therefore shows exactly what a no-JS or headless render shows.
 */
export const Default = () => (
  <Reveal>
    <Note heading="One accent, one meaning">
      Orange marks what is live right now, or what is yours. Nothing else is ever orange, so the
      room reads the same way every time you look at it.
    </Note>
  </Reveal>
);

/** Staggered by index — a row of three enters in sequence, 60ms apart. */
export const Staggered = () => (
  <Three>
    <Reveal index={0}>
      <Note heading="One accent, one meaning">Orange marks what is live, or what is yours.</Note>
    </Reveal>
    <Reveal index={1}>
      <Note heading="Hold a window">Request a time and get a reminder before it starts.</Note>
    </Reveal>
    <Reveal index={2}>
      <Note heading="Finish and free it">Tap done and the machine frees for everyone.</Note>
    </Reveal>
  </Three>
);
