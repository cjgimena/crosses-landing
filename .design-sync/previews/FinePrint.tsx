import { FinePrint } from '@crosses/ui';

export const Default = () => <FinePrint>iPhone · iOS 26 · NFC tags optional</FinePrint>;

export const Requirements = () => (
  <div style={{ display: 'grid', gap: 14 }}>
    <FinePrint>iPhone · iOS 26 · NFC tags optional</FinePrint>
    <FinePrint>No card required · Leave any time</FinePrint>
  </div>
);
