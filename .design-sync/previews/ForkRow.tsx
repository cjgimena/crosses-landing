import { ForkRow } from '@crosses/ui';

/** A fork is a pair — the branch that lands in the product is pinned orange. */
export const APair = () => (
  <div style={{ maxWidth: 460 }}>
    <ForkRow live>
      <b>With Crosses installed,</b> the tap opens the app straight to that machine and starts the
      session.
    </ForkRow>
    <ForkRow>
      <b>Without it,</b> the same tag opens a page naming the machine: a guest stringer or an
      Android phone still lands somewhere useful.
    </ForkRow>
  </div>
);

export const Live = () => (
  <div style={{ maxWidth: 460 }}>
    <ForkRow live>
      <b>With Crosses installed,</b> the tap opens the app straight to that machine.
    </ForkRow>
  </div>
);

export const Neutral = () => (
  <div style={{ maxWidth: 460 }}>
    <ForkRow>
      <b>Without it,</b> the same tag opens a page naming the machine.
    </ForkRow>
  </div>
);
