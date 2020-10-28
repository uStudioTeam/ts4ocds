/**
 * @packageDocumentation
 * @module Requirements
 */

import { Type } from 'class-transformer';

import { RequirementGroup } from '../requirement-group';

/**
 * A criterion on which either bidders or items will be judged, evaluated or assessed.
 */
export class Criterion<RG extends RequirementGroup = RequirementGroup> {
  /**
   * A list of requirement groups for this Criterion.
   * A criterion is satisfied by one or more requirement groups being met.
   * A requirement group is met when all requirements in the group are satisfied.
   */
  @Type(() => RequirementGroup)
  public requirementGroups: RG[];

  /**
   * The identifier for this criterion.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  public id: string | number;

  /**
   * A title for this criterion.
   */
  public title?: string;

  /**
   * A description of this criterion.
   * Structured information should be provided in its other fields.
   */
  public description?: string;

  /**
   * Source of response to the requirements specified in the criterion,
   * for example responses may be submitted by tenderers or by an assessment committee at the procuringEntity.
   */
  public source?: 'tenderer' | 'buyer' | 'procuringEntity';

  /**
   * The schema element that the criterion judges, evaluates or assesses.
   * For example criterion may be defined against items or against bidders.
   */
  public relatesTo?: 'tenderer' | 'item';
}
