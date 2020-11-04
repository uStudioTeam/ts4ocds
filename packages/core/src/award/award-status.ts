/**
 * @packageDocumentation
 * @module Standard.Award
 */
import { ClosedCodeList, CodeList } from '@ts4ocds/utils';

/**
 * The current status of the {@link Award | award},
 * from the closed [awardStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#award-status) codelist.
 */
export const AwardStatuses = new ClosedCodeList(['pending', 'active', 'cancelled', 'unsuccessful']);

/**
 * The current status of the {@link Award | award},
 * from the closed [awardStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#award-status) codelist.
 */
export type AwardStatus = CodeList<typeof AwardStatuses>;
