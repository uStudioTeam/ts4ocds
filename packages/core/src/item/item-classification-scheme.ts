/**
 * @packageDocumentation
 * @module Standard.Item
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * The scheme or codelist from which the {@link Classification.id | classification code} is taken.
 * For line {@link Item.classification | item classifications},
 * this uses the open [itemClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#item-classification-scheme) codelist.
 */
export const ItemClassificationSchemes = new OpenCodeList([
  'CPV',
  'CPVS',
  'GSIN',
  'UNSPSC',
  'CPC',
  'OKDP',
  'OKPD',
  'CUCOP',
]);

/**
 * The scheme or codelist from which the {@link Classification.id | classification code} is taken.
 * For line {@link Item.classification | item classifications},
 * this uses the open [itemClassificationScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#item-classification-scheme) codelist.
 */
export type ItemClassificationScheme = CodeList<typeof ItemClassificationSchemes>;
