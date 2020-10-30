/**
 * @packageDocumentation
 * @module Requirements
 */

import type { Initializer } from '@ts4ocds/utils';

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

  public constructor(initializer: Initializer<RequirementReference>) {
    Object.assign(this, initializer);
  }
}
