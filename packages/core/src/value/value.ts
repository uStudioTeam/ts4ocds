/**
 * @packageDocumentation
 * @module Value
 */

import { Type } from 'class-transformer';

import type { Currency } from './currency';

/**
 * Financial values should be published with a currency attached.
 */
export class Value {
  /**
   * The currency of the amount,
   * from the closed [currency](https://standard.open-contracting.org/1.1/en/schema/codelists/#currency) codelist.
   */
  @Type(() => String)
  public currency?: Currency;

  /**
   * Amount as a number.
   */
  public amount?: number;
}
