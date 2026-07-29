import type { SVGProps } from 'react';
import '../styles/tokens.css';

export interface CrossesMarkProps extends Omit<SVGProps<SVGSVGElement>, 'viewBox'> {
  /**
   * Colour the weave knocks out to. The mark is woven, not stacked: the crossing
   * bars are drawn twice, once in the surface colour to cut the gap and once in
   * ink on top. That knockout has to match whatever the mark sits on, so set this
   * when the mark is not on `--bg` (e.g. `var(--surface)` inside a Card).
   *
   * @default 'var(--bg)'
   */
  knockout?: string;
  /** Pixel size of the square mark. Omit to inherit from `.lockup .mark`. */
  size?: number;
}

/**
 * The Crosses mark — a woven "#", per "Crosses Brand Final".
 *
 * Three ink strokes and exactly one orange vertical: the orange is the live
 * string. Horizontals pass in front of the orange vertical at the top and in
 * front of the ink vertical at the bottom, which is what makes it read as woven
 * rather than as a grid.
 */
export function CrossesMark({ knockout = 'var(--bg)', size, className, ...rest }: CrossesMarkProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      aria-hidden="true"
      focusable="false"
      width={size}
      height={size}
      className={['mark', className].filter(Boolean).join(' ')}
      {...rest}
    >
      <g fill="none" strokeWidth="10" strokeLinecap="round">
        <line x1="16" y1="35" x2="84" y2="35" stroke="currentColor" />
        <line x1="16" y1="65" x2="84" y2="65" stroke="currentColor" />
        <line x1="35" y1="16" x2="35" y2="84" stroke="currentColor" />
        <line className="live" x1="65" y1="16" x2="65" y2="84" stroke="var(--orange)" />
      </g>
      {/* A 2-unit knockout gap where the top bar passes in front of the orange
          vertical and the bottom bar in front of the ink vertical. */}
      <g fill="none" strokeLinecap="butt">
        <line x1="57" y1="35" x2="73" y2="35" stroke={knockout} strokeWidth="14" />
        <line x1="27" y1="65" x2="43" y2="65" stroke={knockout} strokeWidth="14" />
      </g>
      {/* The ink bars, redrawn on top of the knockout. */}
      <g fill="none" strokeLinecap="round">
        <line x1="58" y1="35" x2="72" y2="35" stroke="currentColor" strokeWidth="10" />
        <line x1="28" y1="65" x2="42" y2="65" stroke="currentColor" strokeWidth="10" />
      </g>
    </svg>
  );
}
