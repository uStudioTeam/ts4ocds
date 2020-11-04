/**
 * @packageDocumentation
 * @module Requirements
 */

import { Initializable } from '@ts4ocds/utils';

import type { Requirement } from './requirement';

/**
 * Used to cross reference a {@link Requirement.Requirement | requirement}.
 */
export class RequirementReference extends Initializable<RequirementReference> {
  /**
   * The {@link Requirement.id | id} of the {@link Requirement.Requirement | requirement} which the {@link RequirementResponse.RequirementResponse | response} is applicable to.
   */
  public id!: Requirement['id'];

  /**
   * The {@link Requirement.title | title} of the {@link Requirement.Requirement | requirement} which the {@link RequirementResponse.RequirementResponse | response} is applicable to.
   */
  public title?: Requirement['title'];
}
