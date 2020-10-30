/**
 * @packageDocumentation
 * @module Organization
 */

import type { Initializer } from '@ts4ocds/utils';

/**
 * The id and name of the party being referenced.
 * Used to cross-reference to the parties section
 */
export class OrganizationReference {
  /**
   * The id of the party being referenced. This must match the id of an entry in the parties section.
   */
  public id: string | number;

  /**
   * The name of the party being referenced.
   * This must match the name of an entry in the parties section.
   */
  public name?: string;

  public constructor(initializer: Initializer<OrganizationReference>) {
    Object.assign(this, initializer);
  }
}
