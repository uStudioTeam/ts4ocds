/**
 * @packageDocumentation
 * @module Standard.Planning.Milestone
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * The nature of the {@link Milestone | milestone},
 * using the open [milestoneType](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-type) codelist.
 */
export const MilestoneTypes = new OpenCodeList([
  'preProcurement',
  'approval',
  'engagement',
  'assessment',
  'delivery',
  'reporting',
  'financing',
]);

/**
 * The nature of the {@link Milestone | milestone},
 * using the open [milestoneType](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-type) codelist.
 */
export type MilestoneType = CodeList<typeof MilestoneTypes>;
