import { ButtonOutline, Nav, NavLink } from '@crosses/ui';

export const Default = () => (
  <Nav action={<ButtonOutline href="#access">Early access</ButtonOutline>}>
    <NavLink href="#room" active>
      The room
    </NavLink>
    <NavLink href="#session">A session</NavLink>
    <NavLink href="#tags">Tags</NavLink>
  </Nav>
);

/** Below 900px the links collapse and only the action survives. */
export const ActionOnly = () => (
  <Nav action={<ButtonOutline href="#access">Early access</ButtonOutline>} />
);
