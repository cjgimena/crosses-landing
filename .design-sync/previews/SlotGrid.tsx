import { SlotGrid } from '@crosses/ui';

export const Default = () => (
  <div style={{ minWidth: 360 }}>
    <SlotGrid active={4} />
  </div>
);

/** The count said as shape — it's the stepper's number, read at a glance. */
export const Counting = () => (
  <div style={{ display: 'grid', gap: 12, minWidth: 360 }}>
    <SlotGrid active={1} />
    <SlotGrid active={3} />
    <SlotGrid active={6} />
    <SlotGrid active={8} />
  </div>
);

export const AllLit = () => (
  <div style={{ minWidth: 360 }}>
    <SlotGrid active={8} />
  </div>
);

/** A smaller room: fewer slots, same treatment. */
export const FourUp = () => (
  <div style={{ minWidth: 360 }}>
    <SlotGrid total={4} active={2} />
  </div>
);
