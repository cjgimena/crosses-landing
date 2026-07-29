import { ButtonOutline, Lockup, Masthead, Nav, NavLink } from '@crosses/ui';

/**
 * The masthead is `position: fixed`, so a preview has to give it a containing
 * block or it pins itself to the viewport and escapes the card. `transform` on
 * the wrapper does that — it's the same trick a modal-safe layout uses.
 */
const Frame = ({ children }: { children: React.ReactNode }) => (
  <div style={{ position: 'relative', height: 82, transform: 'translateZ(0)' }}>{children}</div>
);

export const Default = () => (
  <Frame>
    <Masthead>
      <Lockup />
      <Nav action={<ButtonOutline href="#access">Early access</ButtonOutline>}>
        <NavLink href="#room">The room</NavLink>
        <NavLink href="#session">A session</NavLink>
        <NavLink href="#tags">Tags</NavLink>
      </Nav>
    </Masthead>
  </Frame>
);

/**
 * Past 30px of scroll it earns a background: blurred off-white and a hairline
 * rule. Shown here by applying the state class the scroll handler sets.
 */
export const Stuck = () => (
  <Frame>
    <Masthead className="is-stuck">
      <Lockup />
      <Nav action={<ButtonOutline href="#access">Early access</ButtonOutline>}>
        <NavLink href="#room" active>
          The room
        </NavLink>
        <NavLink href="#session">A session</NavLink>
        <NavLink href="#tags">Tags</NavLink>
      </Nav>
    </Masthead>
  </Frame>
);
