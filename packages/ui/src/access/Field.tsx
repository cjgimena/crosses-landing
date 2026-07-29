import { useId } from 'react';
import type { InputHTMLAttributes, ReactNode } from 'react';
import './access.css';

export interface FieldProps extends InputHTMLAttributes<HTMLInputElement> {
  /** The mono label above the rule. Two or three words, no colon. */
  label: ReactNode;
  /** Turns the underline `--orange-deep`. Pair it with a message saying what to fix. */
  invalid?: boolean;
  /** Class for the wrapping `<span class="field">`, not the input. */
  fieldClassName?: string;
}

/**
 * A text input as a ruled line: no box, no fill, just a hairline underline that
 * thickens to orange on focus.
 *
 * The underline is deliberately square — the system's global focus radius is
 * overridden here, because a rounded rule under text reads as a leftover box.
 */
export function Field({ label, invalid = false, fieldClassName, id, className, ...rest }: FieldProps) {
  const auto = useId();
  const inputId = id ?? auto;

  return (
    <span className={['field', invalid && 'err', fieldClassName].filter(Boolean).join(' ')}>
      <label htmlFor={inputId}>{label}</label>
      <input id={inputId} className={className} aria-invalid={invalid || undefined} {...rest} />
    </span>
  );
}
