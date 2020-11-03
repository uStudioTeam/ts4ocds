/**
 * @packageDocumentation
 * @module Options.OptionGroup
 */

import { Initializable } from '@ts4ocds/utils';

import type { Option } from '../option';

import type { OptionGroupRelatesTo } from './option-group-relates-to';

/**
 * An option group is a set of options that may be applied by Procuring Entity for specific property
 */
export class OptionGroup extends Initializable<OptionGroup> {
  /**
   * An identifier for this group
   */
  public id: string | number;

  /**
   * Free-text description for this group
   */
  public description?: string;

  /**
   * Options available for this 'optionGroup'
   */
  public options: Option[];

  /**
   * The scheme element that the group applies to
   */
  public relatesTo: OptionGroupRelatesTo;
}
