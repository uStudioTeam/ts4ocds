/**
 * @packageDocumentation
 * @module Options.OptionGroup
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

/**
 * The scheme element that the {@link OptionGroup | group} applies to.
 */
export const OptionGroupsRelateTo = new OpenCodeList([
  'placeOfPerformance',
  'contractPeriod',
  'minValue',
  'maxValue',
  'period',
  'value',
  'measure',
  'unit',
]);

/**
 * The scheme element that the {@link OptionGroup | group} applies to.
 */
export type OptionGroupRelatesTo = CodeList<typeof OptionGroupsRelateTo>;
