/**
 * @packageDocumentation
 * @module Standard.Value
 */

import { Initializable } from '@ts4ocds/utils';

import type { Currency } from './currency';

/**
 * Financial values should be published with a currency attached.
 */
export class Value extends Initializable<Value> {
  /**
   * Amount as a number.
   */
  public amount?: number;

  /**
   * The currency of the amount,
   * from the closed [currency](https://standard.open-contracting.org/1.1/en/schema/codelists/#currency) codelist.
   */
  public currency?: Currency;
}
