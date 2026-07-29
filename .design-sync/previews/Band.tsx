import { Aside, Band, Note, Split, Three } from '@crosses/ui';

/** One fold, one idea: the rule, the aside, the content, the rhythm below. */
export const Default = () => (
  <Band id="room">
    <Split>
      <Aside eyebrow="The room" heading="Status nobody has to maintain.">
        State comes from what people are doing on the machines. It changes the second someone
        finishes.
      </Aside>
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
    </Split>
  </Band>
);
