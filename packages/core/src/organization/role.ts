/**
 * @packageDocumentation
 * @module Standard.Organization
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * The {@link Organization | party's} {@link Organization.roles | role(s)} in the contracting process,
 * using the open [partyRole](https://standard.open-contracting.org/1.1/en/schema/codelists/#party-role) codelist.
 */
export const Roles = new OpenCodeList([
  'buyer',
  'procuringEntity',
  'supplier',
  'tenderer',
  'funder',
  'enquirer',
  'payer',
  'payee',
  'reviewBody',
  'interestedParty',
]);

/**
 * The {@link Organization | party's} {@link Organization.roles | role(s)} in the contracting process,
 * using the open [partyRole](https://standard.open-contracting.org/1.1/en/schema/codelists/#party-role) codelist.
 */
export type Role = CodeList<typeof Roles>;
