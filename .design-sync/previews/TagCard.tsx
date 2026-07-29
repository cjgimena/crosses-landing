import { TagCard, TagLink } from '@crosses/ui';

/** The quantity is said three ways: the digit, the amount, the lit slots. */
export const Default = () => (
  <div style={{ maxWidth: 420 }}>
    <TagCard title="Printed tags" footer={<TagLink href="#access">Tell me when tags ship</TagLink>}>
      Weatherproof NFC stickers with the mark printed on the cover and the machine number beside it.
      Blank NTAG215 tags work today.
    </TagCard>
  </div>
);

/** Controlled at the ceiling — the plus disables, the slots are all lit. */
export const AtMaximum = () => (
  <div style={{ maxWidth: 420 }}>
    <TagCard title="Printed tags" quantity={8}>
      Weatherproof NFC stickers, one per machine in the room.
    </TagCard>
  </div>
);

/** Singular reads correctly: "1 tag", not "1 tags". */
export const SingleTag = () => (
  <div style={{ maxWidth: 420 }}>
    <TagCard title="Printed tags" quantity={1}>
      One machine, one tag.
    </TagCard>
  </div>
);

/** Something that already exists takes no status stamp. */
export const Shipping = () => (
  <div style={{ maxWidth: 420 }}>
    <TagCard title="Blank NTAG215" badge={null} unitPrice={2} defaultQuantity={6}>
      Any blank NTAG215 sticker pairs from inside the app today — the printed ones are just nicer to
      look at.
    </TagCard>
  </div>
);
