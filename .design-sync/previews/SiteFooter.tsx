import { Lockup, SiteFooter } from '@crosses/ui';

export const Default = () => (
  <SiteFooter fine="© 2026 Crosses. Built for team rooms that share a stringing machine.">
    <Lockup size="sm" />
    <nav aria-label="Footer">
      <a href="#room">The room</a>
      <a href="#session">A session</a>
      <a href="#tags">Tags</a>
      <a href="/privacy">Privacy</a>
      <a href="/support">Support</a>
      <a href="#access">Early access</a>
    </nav>
  </SiteFooter>
);

export const WithoutFinePrint = () => (
  <SiteFooter>
    <Lockup size="sm" />
    <nav aria-label="Footer">
      <a href="/privacy">Privacy</a>
      <a href="/support">Support</a>
    </nav>
  </SiteFooter>
);
