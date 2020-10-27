/**
 * @packageDocumentation
 * @module Contract
 */

import { ClosedCodeList, CodeList } from '@ts4ocds/utils';

/**
 * The current status of the contract,
 * from the closed [contractStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#contract-status) codelist.
 */
export const ContractStatuses = new ClosedCodeList(['pending', 'active', 'cancelled', 'terminated']);

/**
 * The current status of the contract,
 * from the closed [contractStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#contract-status) codelist.
 */
export type ContractStatus = CodeList<typeof ContractStatuses>;
