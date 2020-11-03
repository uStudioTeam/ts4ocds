/**
 * @packageDocumentation
 * @module Requirements.Criterion
 */

import type { Item } from '@ts4ocds/core/item';

import type { RequirementGroup } from '../requirement-group';

import type { Criterion } from './criterion';

/**
 * A criterion on which either bidders or {@link Item | items} will be judged, evaluated or assessed.
 */
export interface ItemCriterion<RG extends RequirementGroup = RequirementGroup> extends Criterion<RG> {
  /**
   * The schema element that the criterion judges, evaluates or assesses.
   */
  relatesTo: 'item';
  /**
   * This field must be populated with the id of the {@link Item | item} in this tender section
   * which the criterion relates to.
   */
  relatedItem: Item['id'];
}
