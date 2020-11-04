/**
 * @packageDocumentation
 * @module Requirements.RequirementResponse
 */

import type { RequirementResponse } from './requirement-response';

/**
 * An assertion that responds to a single {@link Requirement | requirement}.
 * A requirement response provides the value for the {@link Requirement | requirement} and may provide the {@link Period | period} to which it applies.
 */
export interface NumericRequirementResponse extends RequirementResponse {
  /**
   * The value of this requirement response. The value must be of the type `number`.
   */
  value: number;
}
