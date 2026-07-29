import { ExtendGrid } from '@crosses/ui';

/** Interactive: four fixed amounts, because the answer is always "a bit more". */
export const Default = () => (
  <div style={{ maxWidth: 300 }}>
    <ExtendGrid onSelect={() => {}} />
  </div>
);

/** Inert, for the demo screens. */
export const Static = () => (
  <div style={{ maxWidth: 300 }}>
    <ExtendGrid />
  </div>
);

export const CustomOptions = () => (
  <div style={{ maxWidth: 300 }}>
    <ExtendGrid options={[10, 20, 30, 45]} onSelect={() => {}} />
  </div>
);
