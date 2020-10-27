/**
 * @packageDocumentation
 * @module Requirements
 */

import { Criterion } from './criterion';
import type { RequirementGroup } from '../requirement-group';

/**
 * A criterion on which either bidders or items will be judged, evaluated or assessed.
 */
export interface ItemCriterion<RG extends RequirementGroup = RequirementGroup> extends Criterion<RG> {
  /**
   * The schema element that the criterion judges, evaluates or assesses.
   */
  relatesTo: 'item';
  /**
   * This field must be populated with the id of the item in this tender section
   * which the criterion relates to.
   */
  relatedItem: string;
}
