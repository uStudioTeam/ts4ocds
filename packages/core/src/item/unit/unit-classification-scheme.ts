/**
 * @packageDocumentation
 * @module Item
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * The list from which identifiers for units of measure are taken,
 * using the open [unitClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#unit-classification-scheme) codelist.
 * 'UNCEFACT' is recommended.
 */
export const UnitClassificationSchemes = new OpenCodeList(['UNCEFACT', 'QUDT']);

/**
 * The list from which identifiers for units of measure are taken,
 * using the open [unitClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#unit-classification-scheme) codelist.
 * 'UNCEFACT' is recommended.
 */
export type UnitClassificationScheme = CodeList<typeof UnitClassificationSchemes>;
