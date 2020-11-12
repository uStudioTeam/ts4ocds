/**
 * @packageDocumentation
 * @module Standard.Unit
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * The list from which {@link Unit.id | identifiers} for {@link Unit | units} of measure are taken,
 * using the open [unitClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#unit-classification-scheme) codelist.
 * _'UNCEFACT'_ is recommended.
 */
export const UnitClassificationSchemes = new OpenCodeList(['UNCEFACT', 'QUDT']);

/**
 * The list from which {@link Unit.id | identifiers} for {@link Unit | units} of measure are taken,
 * using the open [unitClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#unit-classification-scheme) codelist.
 * _'UNCEFACT'_ is recommended.
 */
export type UnitClassificationScheme = CodeList<typeof UnitClassificationSchemes>;
