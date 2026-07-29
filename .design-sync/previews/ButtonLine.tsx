import { ButtonLine, ButtonSolid } from '@crosses/ui';

export const WithBadge = () => <ButtonLine badge="Coming soon">iPhone</ButtonLine>;

export const WithoutBadge = () => <ButtonLine>iOS 26 or later</ButtonLine>;

/** How it actually appears: beside the primary action, matching its height. */
export const BesideThePrimary = () => (
  <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: 20 }}>
    <ButtonSolid href="#access">Get early access</ButtonSolid>
    <ButtonLine badge="Coming soon">iPhone</ButtonLine>
  </div>
);
