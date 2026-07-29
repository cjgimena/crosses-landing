import { SessionScreen } from '@crosses/ui';

/** The screen at real scale, flat — no phone frame, no device chrome. */
export const Default = () => (
  <SessionScreen
    machine="MACHINE 02 · GAMMA X-ELS"
    timing="STARTED 3:12 PM · FINISH ~3:57 PM"
    timer="24:00"
    progress={0.47}
    aria-label="The stringing screen for Machine 02, a Gamma X-ELS. A live timer counts down the time left on your estimate, with buttons to finish or add more time."
  />
);

/** Interactive: the controls are real when the handlers are wired. */
export const Interactive = () => (
  <SessionScreen
    machine="MACHINE 02 · GAMMA X-ELS"
    timing="STARTED 3:12 PM · FINISH ~3:57 PM"
    timer="24:00"
    progress={0.47}
    onDone={() => {}}
    onExtend={() => {}}
    aria-label="Stringing screen with the finish and extend controls live."
  />
);

/** Nearly out of estimate — the meter is almost full. */
export const AlmostDone = () => (
  <SessionScreen
    machine="MACHINE 01 · WISE 2086"
    timing="STARTED 2:05 PM · FINISH ~2:50 PM"
    timer="3:12"
    progress={0.93}
    aria-label="Stringing screen for Machine 01 with three minutes left on the estimate."
  />
);

/** Just started, and without the header's timing stamp. */
export const JustStarted = () => (
  <SessionScreen
    machine="MACHINE 03 · BABOLAT STAR 5"
    timer="45:00"
    progress={0}
    aria-label="Stringing screen for Machine 03 at the start of a 45 minute estimate."
  />
);
