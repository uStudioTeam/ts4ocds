/**
 * @packageDocumentation
 * @module Standard.Tender
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';
import { MainProcurementCategories } from './main-procurement-category';

/**
 * Any additional categories describing the objects of this contracting process,
 * using the open [extendedProcurementCategory](https://standard.open-contracting.org/1.1/en/schema/codelists/#extended-procurement-category) codelist.
 */
export const AdditionalProcurementCategories = new OpenCodeList([...MainProcurementCategories, 'consultingServices']);

/**
 * Any additional categories describing the objects of this contracting process,
 * using the open [extendedProcurementCategory](https://standard.open-contracting.org/1.1/en/schema/codelists/#extended-procurement-category) codelist.
 */
export type AdditionalProcurementCategory = CodeList<typeof AdditionalProcurementCategories>;
