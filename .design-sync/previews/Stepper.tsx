import { Price, Stepper } from '@crosses/ui';

export const Default = () => <Stepper defaultValue={4} />;

export const WithPrice = () => (
  <div style={{ maxWidth: 320 }}>
    <Stepper defaultValue={4} trailing={<Price amount="$24" unit="4 tags" />} />
  </div>
);

/** At the floor the minus disables rather than silently clamping. */
export const AtMinimum = () => <Stepper value={1} min={1} max={8} />;

export const AtMaximum = () => <Stepper value={8} min={1} max={8} />;
