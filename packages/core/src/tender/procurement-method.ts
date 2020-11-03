/**
 * @packageDocumentation
 * @module Standard.Tender
 */

import { ClosedCodeList, CodeList } from '@ts4ocds/utils';

/**
 * The procurement method,
 * from the closed [method](https://standard.open-contracting.org/1.1/en/schema/codelists/#method) codelist.
 */
export const ProcurementMethods = new ClosedCodeList(['open', 'selective', 'limited', 'direct']);

/**
 * The procurement method,
 * from the closed [method](https://standard.open-contracting.org/1.1/en/schema/codelists/#method) codelist.
 */
export type ProcurementMethod = CodeList<typeof ProcurementMethods>;
