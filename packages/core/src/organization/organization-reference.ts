/**
 * @packageDocumentation
 * @module Organization
 */

/**
 * The id and name of the party being referenced.
 * Used to cross-reference to the parties section
 */
export class OrganizationReference {
  /**
   * The name of the party being referenced.
   * This must match the name of an entry in the parties section.
   */
  public name?: string;

  /**
   * The id of the party being referenced. This must match the id of an entry in the parties section.
   */
  public id: string | number;
}
