/**
 * @packageDocumentation
 * @module Requirements.Criterion
 */

import type { Item } from '@ts4ocds/core/item';

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
export interface ItemCriterion<RG extends RequirementGroup = RequirementGroup> extends Criterion<RG> {
  /**
   * The schema element that the criterion judges, evaluates or assesses.
   */
  relatesTo: 'item';
  /**
   * This field must be populated with the {@link Item.id | id} of the {@link Item.Item | item} in this tender section
   * which the criterion relates to.
   */
  relatedItem: Item['id'];
}
