/**
 * @packageDocumentation
 * @module Organization
 */

import { Type } from 'class-transformer';

import type { Role } from './role';
import { Address } from '../address';
import { Identifier } from './identifier';
import { ContactPoint } from './contact-point';

/**
 * A party (organization)
 */
export class Organization<PD extends Record<string, any> | undefined = undefined, R extends Role | string = Role> {
  /**
   * The primary identifier for this organization or participant.
   * Identifiers that uniquely pick out a legal entity should be preferred.
   * Consult the [organization identifier guidance](https://standard.open-contracting.org/1.1/en/schema/identifiers/)
   * for the preferred scheme and identifier to use.
   */
  @Type(() => Identifier)
  public identifier: Identifier;

  /**
   * A list of additional / supplemental identifiers for the organization or participant,
   * using the [organization identifier guidance](https://standard.open-contracting.org/1.1/en/schema/identifiers/).
   * This can be used to provide an internally used identifier for this organization
   * in addition to the primary legal entity identifier.
   */
  @Type(() => Identifier)
  public additionalIdentifiers: Identifier[];

  /**
   * An address.
   * This may be the legally registered address of the organization, or may be a correspondence address
   * for this particular contracting process.
   */
  @Type(() => Address)
  public address: Address;

  /**
   * Contact details that can be used for this party.
   */
  @Type(() => ContactPoint)
  public contactPoint?: ContactPoint;

  /**
   * The party's role(s) in the contracting process,
   * using the open [partyRole](https://standard.open-contracting.org/1.1/en/schema/codelists/#party-role) codelist.
   */
  @Type(() => String)
  public roles?: R[];

  /**
   * Additional classification information about parties can be provided using partyDetail extensions
   * that define particular properties and classification schemes.
   */
  @Type(() => Object)
  public details?: PD;

  /**
   * The ID used for cross-referencing to this party from other sections of the release.
   * This field may be built with the following structure {identifier.scheme}-{identifier.id}(-{department-identifier}).
   */
  public id: string;

  /**
   * A common name for this organization or other participant in the contracting process.
   * The identifier object provides a space for the formal legal name, and so this may either repeat that value,
   * or may provide the common name by which this organization or entity is known. This field may also include details
   * of the department or sub-unit involved in this contracting process.
   */
  public name?: string;
}
