import { ButtonLine, ButtonSolid, Hero } from '@crosses/ui';

export const Default = () => (
  <Hero
    eyebrow="Stringing machines · team rooms"
    heading="Know the machine is free before you walk over."
    lead="Crosses keeps every stringing machine your team shares on one live screen. Hold a window when you need one, tap the machine's tag to start, and every job logs itself."
  >
    <ButtonSolid href="#access">Get early access</ButtonSolid>
    <ButtonLine badge="Coming soon">iPhone</ButtonLine>
  </Hero>
);

export const HeadingOnly = () => <Hero heading="Crosses is coming to iPhone." />;
