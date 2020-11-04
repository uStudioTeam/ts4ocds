/**
 * @packageDocumentation
 * @module Options.OptionGroup
 */

import { Initializable } from '@ts4ocds/utils';

import type { Option } from '../option';

import type { OptionGroupRelatesTo } from './option-group-relates-to';

/**
 * An option group is a set of options that may be applied by Procuring Entity for specific property.
 *
 * @param R
 * The scheme element that the group applies to.
 */
export class OptionGroup<R extends OptionGroupRelatesTo = OptionGroupRelatesTo> extends Initializable<OptionGroup> {
  /**
   * An identifier for this group.
   */
  public id!: string | number;

  /**
   * Free-text description for this group.
   */
  public description?: string;

  /**
   * {@link Option | Options} available for this `optionGroup`.
   */
  public options!: Option[];

  /**
   * The scheme element that the group applies to.
   */
  public relatesTo!: R | string;
}
