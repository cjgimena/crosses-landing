import { Legend } from '@crosses/ui';

export const Default = () => <Legend />;

/** Without the Now hairline, for a board that isn't showing a timeline. */
export const WithoutNow = () => <Legend showNow={false} />;
