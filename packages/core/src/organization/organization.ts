/**
 * @packageDocumentation
 * @module Standard.Organization
 */

import { Initializable } from '@ts4ocds/utils';

import type { Role } from './role';
import type { Address } from '../address';
import type { Identifier } from './identifier';
import type { ContactPoint } from './contact-point';
import { OrganizationReference } from './organization-reference';

/**
 * A party (organization)
 */
export class Organization<
  R extends Role = Role,
  PD extends Record<string, any> | undefined = undefined
> extends Initializable<Organization<R, PD>> {
  /**
   * The ID used for cross-referencing to this party from other sections of the release.
   * This field may be built with the following structure {identifier.scheme}-{identifier.id}(-{department-identifier}).
   */
  public id!: string;

  /**
   * The primary {@link Identifier | identifier} for this organization or participant.
   * {@link Identifier | Identifiers} that uniquely pick out a legal entity should be preferred.
   * Consult the [organization identifier guidance](https://standard.open-contracting.org/1.1/en/schema/identifiers/)
   * for the preferred {@link Identifier.scheme | scheme} and {@link Identifier | identifier} to use.
   */
  public identifier!: Identifier;

  /**
   * A list of additional / supplemental {@link Identifier | identifiers} for the organization or participant,
   * using the [organization identifier guidance](https://standard.open-contracting.org/1.1/en/schema/identifiers/).
   * This can be used to provide an internally used {@link Identifier | identifier} for this organization
   * in addition to the primary legal entity {@link Identifier | identifier}.
   */
  public additionalIdentifiers!: Identifier[];

  /**
   * An {@link Address | address}.
   * This may be the legally registered {@link Address | address} of the organization, or may be a correspondence {@link Address | address}
   * for this particular contracting process.
   */
  public address!: Address;

  /**
   * Contact details that can be used for this party.
   */
  public contactPoint?: ContactPoint;

  /**
   * The party's {@link Role | role(s)} in the contracting process,
   * using the open [partyRole](https://standard.open-contracting.org/1.1/en/schema/codelists/#party-role) codelist.
   */
  public roles?: Array<R | string>;

  /**
   * Additional classification information about parties can be provided using `partyDetail` extensions
   * that define particular properties and classification schemes.
   */
  public details?: PD;

  /**
   * A common name for this organization or other participant in the contracting process.
   * The {@link Organization.identifier | identifier} object provides a space for the formal legal name, and so this may either repeat that value,
   * or may provide the common name by which this organization or entity is known. This field may also include details
   * of the department or sub-unit involved in this contracting process.
   */
  public name?: string;

  /**
   * Creates an instance of the {@link OrganizationReference} class from this `Organization`.
   */
  public toReference(): OrganizationReference {
    return new OrganizationReference({
      id: this.id,
      name: this.name,
    });
  }
}
