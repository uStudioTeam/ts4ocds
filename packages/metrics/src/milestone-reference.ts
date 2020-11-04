/**
 * @packageDocumentation
 * @module Metrics
 */

import { Initializable } from '@ts4ocds/utils';
import type { Milestone } from '@ts4ocds/core/planning';

/**
 * A block used to reference a {@link Milestone | milestone}, including the {@link Milestone.id | ID} and {@link Milestone.title | title} of the {@link Milestone | milestone} being referenced.
 */
export class MilestoneReference extends Initializable<MilestoneReference> {
  /**
   * The {@link Milestone.id | ID} of the {@link Milestone | milestone} being referenced,
   * this must match the {@link Milestone.id | ID} of a {@link Milestone | milestone} described elsewhere in a release about this contracting process.
   */
  public id!: string;

  /**
   * The {@link Milestone.title | title} of the {@link Milestone | milestone} being referenced,
   * this must match the title of a milestone described elsewhere in a release about this contracting process.
   */
  public title?: string;

  /**
   * Creates an instance of a {@link MilestoneReference | `MilestoneReference`} class from the provided {@link Milestone | `milestone`}.
   */
  public static fromMilestone<M extends Milestone>(milestone: M): MilestoneReference {
    return new MilestoneReference({
      id: `${milestone.id}`,
      title: milestone.title,
    });
  }
}
