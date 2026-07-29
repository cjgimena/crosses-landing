import { UrlCode } from '@crosses/ui';

/** The bolded segment is the part that varies — "yours", applied to a string. */
export const Default = () => (
  <div style={{ maxWidth: 460 }}>
    <UrlCode>
      crossesapp.com/m/<b>4f2a9c</b>
    </UrlCode>
  </div>
);

export const Plain = () => (
  <div style={{ maxWidth: 460 }}>
    <UrlCode>crossesapp.com/support</UrlCode>
  </div>
);

/** Long URLs scroll rather than wrap — a broken URL reads as two URLs. */
export const Long = () => (
  <div style={{ maxWidth: 320 }}>
    <UrlCode>
      crossesapp.com/rooms/varsity/machines/<b>4f2a9c</b>?from=tag
    </UrlCode>
  </div>
);
