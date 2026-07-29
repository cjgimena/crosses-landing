import { DoneButton } from '@crosses/ui';

export const Default = () => (
  <div style={{ maxWidth: 300 }}>
    <DoneButton />
  </div>
);

/** The demo-screen form: shown rather than offered, so it renders as a span. */
export const Static = () => (
  <div style={{ maxWidth: 300 }}>
    <DoneButton static />
  </div>
);

export const CustomLabel = () => (
  <div style={{ maxWidth: 300 }}>
    <DoneButton>Finish and log the job</DoneButton>
  </div>
);
