/**
 * @packageDocumentation
 * @module Requirements
 */

import { Criterion } from './criterion';
import type { RequirementGroup } from '../requirement-group';

/**
 * A criterion on which either bidders or items will be judged, evaluated or assessed.
 */
export interface TendererCriterion<RG extends RequirementGroup = RequirementGroup> extends Criterion<RG> {
  /**
   * The schema element that the criterion judges, evaluates or assesses.
   */
  relatesTo: 'tenderer';
}
