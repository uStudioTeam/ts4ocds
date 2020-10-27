/**
 * @packageDocumentation
 * @module Requirements
 */

import { RequirementResponse } from './requirement-response';

/**
 * An assertion that responds to a single requirement.
 * A requirement response provides the value for the requirement and may provide the period to which it applies.
 */
export class StringRequirementResponse extends RequirementResponse {
  /**
   * The value of this requirement response. The value must be of the type defined in the requirement.dataType field.
   */
  public value: string;
}
