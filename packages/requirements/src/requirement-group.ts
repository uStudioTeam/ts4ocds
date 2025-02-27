/**
 * @packageDocumentation
 * @module Requirements
 */

import { Initializable } from '@ts4ocds/utils';

import { Requirement } from './requirement';

/**
 * A requirement group is a set of {@link Requirement.Requirement | requirements} that must be fulfilled together to validate a {@link Criterion.Criterion | criterion}.
 *
 * @param R
 * A list of {@link Requirement.Requirement | requirements} which must all be satisfied for the requirement group to be met.
 */
export class RequirementGroup<R extends Requirement = Requirement> extends Initializable<RequirementGroup<R>> {
  /**
   * The identifier for this requirement group.
   * It must be unique and cannot change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](http://standard.open-contracting.org/latest/en/schema/identifiers/) for further details.
   */
  public id!: string;

  /**
   * A description of this requirement group. Structured information should be provided in the requirements array.
   */
  public description?: string;

  /**
   * A list of {@link Requirement.Requirement | requirements} which must all be satisfied for the requirement group to be met.
   */
  public requirements!: R[];
}
