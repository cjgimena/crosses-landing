import { ForkRow, Forks, TagCard, TagLink, UrlCode } from '@crosses/ui';

/** The pattern: the explanation on the left, the object it describes on the right. */
export const Default = () => (
  <Forks>
    <div>
      <ForkRow live>
        <b>With Crosses installed,</b> the tap opens the app straight to that machine and starts the
        session.
      </ForkRow>
      <ForkRow>
        <b>Without it,</b> the same tag opens a page naming the machine: a guest stringer or an
        Android phone still lands somewhere useful.
      </ForkRow>
      <UrlCode>
        crossesapp.com/m/<b>4f2a9c</b>
      </UrlCode>
    </div>

    <TagCard title="Printed tags" footer={<TagLink href="#access">Tell me when tags ship</TagLink>}>
      Weatherproof NFC stickers with the mark printed on the cover and the machine number beside it.
      Blank NTAG215 tags work today.
    </TagCard>
  </Forks>
);
