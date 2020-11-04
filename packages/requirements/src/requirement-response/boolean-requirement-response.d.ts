/**
 * @packageDocumentation
 * @module Requirements.RequirementResponse
 */

import type { RequirementResponse } from './requirement-response';

/**
 * An assertion that responds to a single {@link Requirement.Requirement | requirement}.
 * A requirement response provides the value for the {@link Requirement.Requirement | requirement} and may provide the {@link Period.Period | period} to which it applies.
 */
export interface BooleanRequirementResponse extends RequirementResponse {
  /**
   * The value of this requirement response. The value must be of the type `boolean`.
   */
  value: boolean;
}
