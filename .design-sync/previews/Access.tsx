import { Access, FinePrint, WaitlistForm } from '@crosses/ui';

/** The closing fold: the page narrows to exactly one decision. */
export const Default = () => (
  <Access
    heading="Crosses is coming to iPhone."
    lead="Built and in testing on real machines. Leave your email and the TestFlight invite reaches you before it hits the App Store."
  >
    <WaitlistForm onSubmit={async () => {}} />
    <FinePrint>iPhone · iOS 26 · NFC tags optional</FinePrint>
  </Access>
);

export const HeadingOnly = () => <Access heading="Crosses is coming to iPhone." />;
