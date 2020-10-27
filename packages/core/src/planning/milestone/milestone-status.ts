/**
 * @packageDocumentation
 * @module Planning
 */

import { ClosedCodeList, CodeList } from '@ts4ocds/utils';

/**
 * The status that was realized on the date provided in `dateModified`,
 * from the closed [milestoneStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-status) codelist.
 */
export const MilestoneStatuses = new ClosedCodeList(['scheduled', 'met', 'notMet', 'partiallyMet'] as const);

/**
 * The status that was realized on the date provided in `dateModified`,
 * from the closed [milestoneStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-status) codelist.
 */
export type MilestoneStatus = CodeList<typeof MilestoneStatuses>;
