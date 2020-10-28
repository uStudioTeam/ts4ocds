/**
 * @packageDocumentation
 * @module Requirements
 */

import type { Requirement } from './requirement';

/**
 * Used to cross reference a requirement.
 */
export class RequirementReference {
  /**
   * The id of the requirement which the response is applicable to.
   */
  public id: Requirement['id'];

  /**
   * The title of the requirement which the response is applicable to.
   */
  public title?: Requirement['title'];
}
