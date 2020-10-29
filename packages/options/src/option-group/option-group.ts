/**
 * @packageDocumentation
 * @module Options
 */

import { Type } from 'class-transformer';

import { Option } from '../option';
import type { OptionGroupRelatesTo } from './option-group-relates-to';

/**
 * An option group is a set of options that may be applied by Procuring Entity for specific property
 */
export class OptionGroup {
  /**
   * Options available for this 'optionGroup'
   */
  @Type(() => Option)
  public options: Option[];

  /**
   * An identifier for this group
   */
  public id: string | number;

  /**
   * Free-text description for this group
   */
  public description?: string;

  /**
   * The scheme element that the group applies to
   */
  public relatesTo: OptionGroupRelatesTo;
}
