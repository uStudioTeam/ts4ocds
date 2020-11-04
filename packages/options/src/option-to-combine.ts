/**
 * @packageDocumentation
 * @module Options
 */

import { Initializable } from '@ts4ocds/utils';

import type { Option } from './option';

/**
 * Whether buyer reserves the right to combine options a 'Option to combine' is used to capture this information.
 */
export class OptionToCombine extends Initializable<OptionToCombine> {
  /**
   * An identifier for this `OptionToCombine`.
   */
  public id!: string | number;

  /**
   * A number of {@link Option.Option | options} related to this `OptionToCombine`.
   */
  public relatedOptions!: Array<Option['id']>;
}
