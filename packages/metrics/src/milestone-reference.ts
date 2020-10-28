/**
 * @packageDocumentation
 * @module Metrics
 */

/**
 * A block used to reference a milestone, including the ID and title of the milestone being referenced.
 */
export class MilestoneReference {
  /**
   * The ID of the milestone being referenced,
   * this must match the ID of a milestone described elsewhere in a release about this contracting process.
   */
  public id: string;

  /**
   * The title of the milestone being referenced,
   * this must match the title of a milestone described elsewhere in a release about this contracting process.
   */
  public title?: string;
}
