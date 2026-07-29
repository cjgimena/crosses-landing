import { useId, useState } from 'react';
import type { HTMLAttributes, ReactNode } from 'react';
import { Card } from '../layout/Card';
import { Price } from '../controls/Price';
import { Stepper } from '../controls/Stepper';
import { PlannedBadge } from './PlannedBadge';
import { SlotGrid } from './SlotGrid';
import './tags.css';

export interface TagCardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  /** The product name, e.g. `"Printed tags"`. */
  title: ReactNode;
  /** Status stamp beside the title. Pass `null` for something that already exists. */
  badge?: ReactNode;
  /** What it is, in two sentences. */
  children?: ReactNode;
  /** The question above the stepper. @default 'How many machines?' */
  question?: ReactNode;
  /** Price per unit, in whole currency units. @default 6 */
  unitPrice?: number;
  /** Currency symbol placed before the amount. @default '$' */
  currency?: string;
  /** Noun counted by the stepper, singular. @default 'tag' */
  unitNoun?: string;
  /** @default 1 */
  min?: number;
  /** @default 8 */
  max?: number;
  /** Starting quantity when uncontrolled. @default 4 */
  defaultQuantity?: number;
  /** Controlled quantity. */
  quantity?: number;
  /** Fires with the new quantity. */
  onQuantityChange?: (quantity: number) => void;
  /** The forward link under the card, normally a `TagLink`. */
  footer?: ReactNode;
}

/**
 * The tag-ordering card: name, status, blurb, a quantity stepper with live
 * pricing, and the slot row that mirrors the count.
 *
 * The count is said three ways — the digit in the stepper, the amount in the
 * price, and the lit slots — because the quantity is the one decision the card
 * exists to support.
 */
export function TagCard({
  title,
  badge = <PlannedBadge />,
  children,
  question = 'How many machines?',
  unitPrice = 6,
  currency = '$',
  unitNoun = 'tag',
  min = 1,
  max = 8,
  defaultQuantity = 4,
  quantity,
  onQuantityChange,
  footer,
  className,
  ...rest
}: TagCardProps) {
  const labelId = useId();
  const [internal, setInternal] = useState(defaultQuantity);
  const qty = quantity ?? internal;

  const handleChange = (next: number) => {
    if (quantity === undefined) setInternal(next);
    onQuantityChange?.(next);
  };

  return (
    <Card className={['tagcard', className].filter(Boolean).join(' ')} {...rest}>
      <div className="top">
        <b>{title}</b>
        {badge}
      </div>
      {children ? <p>{children}</p> : null}

      <span className="q-label" id={labelId}>
        {question}
      </span>
      <Stepper
        value={qty}
        min={min}
        max={max}
        onChange={handleChange}
        labelledBy={labelId}
        decLabel={`Fewer ${unitNoun}s`}
        incLabel={`More ${unitNoun}s`}
        trailing={
          <Price
            amount={`${currency}${qty * unitPrice}`}
            unit={qty === 1 ? `1 ${unitNoun}` : `${qty} ${unitNoun}s`}
          />
        }
      />
      <SlotGrid total={max} active={qty} />
      {footer}
    </Card>
  );
}
