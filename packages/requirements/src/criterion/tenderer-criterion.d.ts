/**
 * @packageDocumentation
 * @module Requirements.Criterion
 */

import type { RequirementGroup } from '../requirement-group';

import type { Criterion } from './criterion';

/**
 * A criterion on which either bidders or {@link Item | items} will be judged, evaluated or assessed.
 */
export interface TendererCriterion<RG extends RequirementGroup = RequirementGroup> extends Criterion<RG> {
  /**
   * The schema element that the criterion judges, evaluates or assesses.
   */
  relatesTo: 'tenderer';
}
