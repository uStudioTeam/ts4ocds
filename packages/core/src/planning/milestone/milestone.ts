/**
 * @packageDocumentation
 * @module Planning
 */

import type { MilestoneType } from './milestone-type';
import type { MilestoneStatus } from './milestone-status';

/**
 * The milestone block can be used to represent a wide variety of events in the lifetime of a contracting process."
 */
export class Milestone {
  /**
   * A local identifier for this milestone, unique within this block.
   * This field is used to keep track of multiple revisions of a milestone through the compilation from release to record mechanism.
   */
  public id: string | number;

  /**
   * Milestone title
   */
  public title?: string;

  /**
   * The nature of the milestone,
   * using the open [milestoneType](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-type) codelist.
   */
  public type?: MilestoneType;

  /**
   * A description of the milestone.
   */
  public description?: string;

  /**
   * Milestone codes can be used to track specific events that take place for a particular kind of contracting process.
   * For example, a code of 'approvalLetter' can be used to allow applications to understand this milestone
   * represents the date an approvalLetter is due or signed.
   */
  public code?: string;

  /**
   * The date the milestone is due.
   */
  public dueDate?: Date | string;

  /**
   * The date on which the milestone was met.
   */
  public dateMet?: Date | string;

  /**
   * The date the milestone was last reviewed or modified and the status was altered or confirmed to still be correct.
   */
  public dateModified?: Date | string;

  /**
   * The status that was realized on the date provided in `dateModified`,
   * from the closed [milestoneStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#milestone-status) codelist.
   */
  public status?: MilestoneStatus;
}
