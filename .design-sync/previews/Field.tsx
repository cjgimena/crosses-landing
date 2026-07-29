import { Field } from '@crosses/ui';

export const Default = () => (
  <div style={{ maxWidth: 320 }}>
    <Field label="Email" type="email" placeholder="you@team.edu" />
  </div>
);

export const Filled = () => (
  <div style={{ maxWidth: 320 }}>
    <Field label="Email" type="email" defaultValue="mia@team.edu" />
  </div>
);

/** Invalid deepens the underline to --orange-deep. Always pair it with a message. */
export const Invalid = () => (
  <div style={{ maxWidth: 320 }}>
    <Field label="Email" type="email" defaultValue="mia@team" invalid />
    <p style={{ margin: '12px 0 0', fontSize: 13.5, color: 'var(--orange-deep)' }}>
      Enter an email we can send the invite to.
    </p>
  </div>
);

export const OtherLabels = () => (
  <div style={{ display: 'grid', gap: 24, maxWidth: 320 }}>
    <Field label="Room name" placeholder="Varsity Room" />
    <Field label="Machine" placeholder="Machine 02" />
  </div>
);
