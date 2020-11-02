/**
 * @packageDocumentation
 * @module Metrics
 */

import { Initializable } from '@ts4ocds/utils';
import type { Milestone } from '@ts4ocds/core/planning';

/**
 * A block used to reference a milestone, including the ID and title of the milestone being referenced.
 */
export class MilestoneReference extends Initializable<MilestoneReference> {
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

  /**
   * Creates an instance of a `MilestoneReference` class from the provided {@link Milestone}
   */
  public static fromMilestone<M extends Milestone>(milestone: M): MilestoneReference {
    return new MilestoneReference({
      id: `${milestone.id}`,
      title: milestone.title,
    });
  }
}
