import { Confirm } from '@crosses/ui';

/** Grey, not orange — a completed action is neither live nor yours. */
export const Default = () => <Confirm>You're on the list. Invite lands at mia@team.edu.</Confirm>;

export const Short = () => <Confirm>You're on the list.</Confirm>;

export const Long = () => (
  <div style={{ maxWidth: 420 }}>
    <Confirm>
      You're on the list. The TestFlight invite reaches mia@team.edu before Crosses hits the App
      Store.
    </Confirm>
  </div>
);
