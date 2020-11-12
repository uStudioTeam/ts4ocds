/**
 * @packageDocumentation
 * @module Requirements.Criterion
 */

import type { RequirementGroup } from '../requirement-group';

import type { Criterion } from './criterion';

/**
 * A criterion on which either bidders or {@link Item.Item | items} will be judged, evaluated or assessed.
 *
 * @param RG
 * A list of {@link RequirementGroup | requirement groups} for this criterion.
 * A criterion is satisfied by one or more {@link RequirementGroup | requirement groups} being met.
 * A {@link RequirementGroup | requirement groups} is met when all {@link Requirement.Requirement | requirements} in the group are satisfied.
 */
export interface TendererCriterion<RG extends RequirementGroup = RequirementGroup> extends Criterion<RG> {
  /**
   * The schema element that the criterion judges, evaluates or assesses.
   */
  relatesTo: 'tenderer';
}
