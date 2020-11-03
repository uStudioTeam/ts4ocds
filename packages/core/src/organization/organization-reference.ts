/**
 * @packageDocumentation
 * @module Standard.Organization
 */

import { Initializable } from '@ts4ocds/utils';

/**
 * The {@link Organization.id | id} and {@link Organization.name | name} of the {@link Organization | party} being referenced.
 * Used to cross-reference to the parties section.
 */
export class OrganizationReference extends Initializable<OrganizationReference> {
  /**
   * The {@link Organization.id | id} of the party being referenced.
   * This must match the {@link Organization.id | id} of an entry in the parties section.
   */
  public id!: string | number;

  /**
   * The {@link Organization.name | name} of the party being referenced.
   * This must match the {@link Organization.name | name} of an entry in the parties section.
   */
  public name?: string;
}
