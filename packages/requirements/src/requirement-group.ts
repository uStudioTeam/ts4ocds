/**
 * @packageDocumentation
 * @module Requirements
 */

import { Type } from 'class-transformer';

import { Requirement } from './requirement';

/**
 * A requirement group is a set of requirements that must be fulfilled together to validate a criterion.
 */
export class RequirementGroup<R extends Requirement = Requirement> {
  /**
   * A list requirements which must all be satisfied for the requirement group to be met.
   */
  @Type(() => Requirement)
  public requirements: R[];

  /**
   * The identifier for this requirement group.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  public id: string;

  /**
   * A description of this requirement group. Structured information should be provided in the requirements array.
   */
  public description?: string;
}