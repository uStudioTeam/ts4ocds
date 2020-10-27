/**
 * @packageDocumentation
 * @module Tender
 */

import { ClosedCodeList, CodeList } from '@ts4ocds/utils';

/**
 * The primary category describing the main object of this contracting process,
 * from the closed [procurementCategory](https://standard.open-contracting.org/1.1/en/schema/codelists/#procurement-category) codelist.
 */
export const MainProcurementCategories = new ClosedCodeList(['goods', 'works', 'services']);

/**
 * The primary category describing the main object of this contracting process,
 * from the closed [procurementCategory](https://standard.open-contracting.org/1.1/en/schema/codelists/#procurement-category) codelist.
 */
export type MainProcurementCategory = CodeList<typeof MainProcurementCategories>;
