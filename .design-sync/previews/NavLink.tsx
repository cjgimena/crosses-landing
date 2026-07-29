import { NavLink } from '@crosses/ui';

export const Default = () => <NavLink href="#room">The room</NavLink>;

/** The active link keeps full ink and grows the orange underline. */
export const Active = () => (
  <NavLink href="#room" active>
    The room
  </NavLink>
);

export const ARow = () => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 30 }}>
    <NavLink href="#room" active>
      The room
    </NavLink>
    <NavLink href="#session">A session</NavLink>
    <NavLink href="#tags">Tags</NavLink>
  </div>
);
