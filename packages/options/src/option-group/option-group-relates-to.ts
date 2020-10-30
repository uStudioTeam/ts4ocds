/**
 * @packageDocumentation
 * @module Options
 */

import { CodeList, OpenCodeList } from '@ts4ocds/utils';

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

export type OptionGroupRelatesTo = CodeList<typeof OptionGroupsRelateTo>;
