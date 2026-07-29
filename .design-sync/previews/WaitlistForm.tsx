import { WaitlistForm } from '@crosses/ui';

/**
 * The resting state. Submission is stubbed here so a card never posts anywhere —
 * pass `endpoint`, or your own `onSubmit`, in a real page.
 */
export const Default = () => (
  <div style={{ maxWidth: 520 }}>
    <WaitlistForm onSubmit={async () => {}} />
  </div>
);

export const CustomLabels = () => (
  <div style={{ maxWidth: 520 }}>
    <WaitlistForm
      label="Work email"
      placeholder="you@academy.org"
      submitLabel="Join the beta"
      onSubmit={async () => {}}
    />
  </div>
);
