import { Lockup } from '@crosses/ui';

export const Masthead = () => <Lockup />;

export const Footer = () => <Lockup size="sm" />;

export const BothScales = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 40 }}>
    <Lockup />
    <Lockup size="sm" />
  </div>
);
