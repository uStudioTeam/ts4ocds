/**
 * @packageDocumentation
 * @module Metrics
 */

import type { Milestone } from '@ts4ocds/core/planning';
import type { Initializer } from '@ts4ocds/utils';

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

  public constructor(initializer: Initializer<MilestoneReference>) {
    Object.assign(this, initializer);
  }

  public static fromMilestone<M extends Milestone>(milestone: M): MilestoneReference {
    return new MilestoneReference({
      id: `${milestone.id}`,
      title: milestone.title,
    });
  }
}
