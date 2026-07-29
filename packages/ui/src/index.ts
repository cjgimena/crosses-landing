/**
 * The Crosses design system.
 *
 * Everything must live inside a `<CrossesRoot>` — that is where the tokens, the
 * background, the type and the focus rings come from.
 */

import './styles/fonts.css';
import './styles/tokens.css';
import './styles/base.css';

/* ---- Brand --------------------------------------------------------------- */
export { CrossesMark } from './brand/CrossesMark';
export type { CrossesMarkProps } from './brand/CrossesMark';
export { Wordmark } from './brand/Wordmark';
export type { WordmarkProps } from './brand/Wordmark';
export { Lockup } from './brand/Lockup';
export type { LockupProps } from './brand/Lockup';

/* ---- Layout -------------------------------------------------------------- */
export { CrossesRoot } from './layout/CrossesRoot';
export type { CrossesRootProps } from './layout/CrossesRoot';
export { Shell } from './layout/Shell';
export type { ShellProps } from './layout/Shell';
export { Band } from './layout/Band';
export type { BandProps } from './layout/Band';
export { Split } from './layout/Split';
export type { SplitProps } from './layout/Split';
export { Three } from './layout/Three';
export type { ThreeProps } from './layout/Three';
export { Aside } from './layout/Aside';
export type { AsideProps } from './layout/Aside';
export { Eyebrow } from './layout/Eyebrow';
export type { EyebrowProps } from './layout/Eyebrow';
export { Card } from './layout/Card';
export type { CardProps } from './layout/Card';
export { Hero } from './layout/Hero';
export type { HeroProps } from './layout/Hero';
export { Masthead } from './layout/Masthead';
export type { MastheadProps } from './layout/Masthead';
export { Nav } from './layout/Nav';
export type { NavProps } from './layout/Nav';
export { NavLink } from './layout/NavLink';
export type { NavLinkProps } from './layout/NavLink';
export { SiteFooter } from './layout/SiteFooter';
export type { SiteFooterProps } from './layout/SiteFooter';
export { SkipLink } from './layout/SkipLink';
export type { SkipLinkProps } from './layout/SkipLink';
export { Reveal } from './layout/Reveal';
export type { RevealProps } from './layout/Reveal';
export { useActiveSection } from './layout/useActiveSection';

/* ---- Controls ------------------------------------------------------------ */
export { ButtonSolid } from './controls/ButtonSolid';
export type { ButtonSolidProps } from './controls/ButtonSolid';
export { ButtonOutline } from './controls/ButtonOutline';
export type { ButtonOutlineProps } from './controls/ButtonOutline';
export { ButtonLine } from './controls/ButtonLine';
export type { ButtonLineProps } from './controls/ButtonLine';
export { TagLink } from './controls/TagLink';
export type { TagLinkProps } from './controls/TagLink';
export { Stepper } from './controls/Stepper';
export type { StepperProps } from './controls/Stepper';
export { Price } from './controls/Price';
export type { PriceProps } from './controls/Price';

/* ---- The room ------------------------------------------------------------ */
export { RoomBoard } from './room/RoomBoard';
export type { RoomBoardProps, RoomBoardMachine } from './room/RoomBoard';
export { Lane } from './room/Lane';
export type { LaneProps } from './room/Lane';
export { Track } from './room/Track';
export type { TrackProps } from './room/Track';
export { LiveTag } from './room/LiveTag';
export type { LiveTagProps } from './room/LiveTag';
export { Legend } from './room/Legend';
export type { LegendProps } from './room/Legend';
export { Note } from './room/Note';
export type { NoteProps } from './room/Note';
export type { MachineStatus, MachineStatusKind } from './room/types';

/* ---- A session ----------------------------------------------------------- */
export { SessionScreen } from './session/SessionScreen';
export type { SessionScreenProps } from './session/SessionScreen';
export { Step } from './session/Step';
export type { StepProps } from './session/Step';
export { Meter } from './session/Meter';
export type { MeterProps } from './session/Meter';
export { DoneButton } from './session/DoneButton';
export type { DoneButtonProps } from './session/DoneButton';
export { ExtendGrid } from './session/ExtendGrid';
export type { ExtendGridProps } from './session/ExtendGrid';

/* ---- Tags ---------------------------------------------------------------- */
export { TagCard } from './tags/TagCard';
export type { TagCardProps } from './tags/TagCard';
export { PlannedBadge } from './tags/PlannedBadge';
export type { PlannedBadgeProps } from './tags/PlannedBadge';
export { ForkRow } from './tags/ForkRow';
export type { ForkRowProps } from './tags/ForkRow';
export { Forks } from './tags/Forks';
export type { ForksProps } from './tags/Forks';
export { UrlCode } from './tags/UrlCode';
export type { UrlCodeProps } from './tags/UrlCode';
export { SlotGrid } from './tags/SlotGrid';
export type { SlotGridProps } from './tags/SlotGrid';

/* ---- Access -------------------------------------------------------------- */
export { Access } from './access/Access';
export type { AccessProps } from './access/Access';
export { WaitlistForm } from './access/WaitlistForm';
export type { WaitlistFormProps } from './access/WaitlistForm';
export { Field } from './access/Field';
export type { FieldProps } from './access/Field';
export { Confirm } from './access/Confirm';
export type { ConfirmProps } from './access/Confirm';
export { FinePrint } from './access/FinePrint';
export type { FinePrintProps } from './access/FinePrint';
