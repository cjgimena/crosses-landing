import { useState } from 'react';
import type { FormEvent, HTMLAttributes } from 'react';
import { ButtonSolid } from '../controls/ButtonSolid';
import { Confirm } from './Confirm';
import { Field } from './Field';
import './access.css';

export interface WaitlistFormProps extends Omit<HTMLAttributes<HTMLFormElement>, 'onSubmit'> {
  /** Where the email is POSTed as `{ email }`. @default '/api/waitlist' */
  endpoint?: string;
  /**
   * Take over submission entirely. Resolve to send the reader to the confirmation;
   * reject with an `Error` and its message is shown inline. When set, `endpoint`
   * is ignored.
   */
  onSubmit?: (email: string) => Promise<void>;
  /** Called after a successful submission. */
  onSuccess?: (email: string) => void;
  /** @default 'Email' */
  label?: string;
  /** @default 'you@team.edu' */
  placeholder?: string;
  /** @default 'Request access' */
  submitLabel?: string;
  /** Builds the confirmation line. @default "You're on the list. Invite lands at {email}." */
  confirmText?: (email: string) => string;
}

const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Email capture, one field wide, with its own validation, busy and confirmation
 * states.
 *
 * Progressive by design: it never silently drops an address. A malformed email is
 * caught before the request; a failed request leaves the form filled in and
 * usable with the reason shown underneath; only a real success swaps the form for
 * the confirmation.
 */
export function WaitlistForm({
  endpoint = '/api/waitlist',
  onSubmit,
  onSuccess,
  label = 'Email',
  placeholder = 'you@team.edu',
  submitLabel = 'Request access',
  confirmText = (email) => `You're on the list. Invite lands at ${email}.`,
  className,
  ...rest
}: WaitlistFormProps) {
  const [email, setEmail] = useState('');
  const [busy, setBusy] = useState(false);
  const [invalid, setInvalid] = useState(false);
  const [message, setMessage] = useState('');
  const [done, setDone] = useState<string | null>(null);

  const post = async (value: string) => {
    const res = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: value }),
    });
    const data = await res.json().catch(() => ({}));
    if (!res.ok) throw new Error(data?.error || 'Something went wrong. Try again in a moment.');
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = email.trim();

    if (!EMAIL.test(value)) {
      setInvalid(true);
      setMessage('Enter an email we can send the invite to.');
      return;
    }

    setMessage('');
    setBusy(true);
    try {
      await (onSubmit ? onSubmit(value) : post(value));
      setDone(value);
      onSuccess?.(value);
    } catch (err) {
      setMessage(
        err instanceof Error && err.message
          ? err.message
          : "Couldn't reach the server. Check your connection and try again.",
      );
    } finally {
      setBusy(false);
    }
  };

  if (done !== null) {
    return <Confirm>{confirmText(done)}</Confirm>;
  }

  return (
    <>
      <form
        className={['form', busy && 'busy', className].filter(Boolean).join(' ')}
        noValidate
        onSubmit={handleSubmit}
        {...rest}
      >
        <Field
          label={label}
          type="email"
          name="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder={placeholder}
          value={email}
          invalid={invalid}
          onChange={(e) => {
            setEmail(e.target.value);
            if (invalid && EMAIL.test(e.target.value.trim())) {
              setInvalid(false);
              setMessage('');
            }
          }}
        />
        <ButtonSolid type="submit">{submitLabel}</ButtonSolid>
      </form>
      {/* Every message this form emits is a failure, so the message slot is
          styled as an error whenever it has anything in it. */}
      <p className={['form-msg', message && 'err'].filter(Boolean).join(' ')} role="status" aria-live="polite">
        {message}
      </p>
    </>
  );
}
