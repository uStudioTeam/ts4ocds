/**
 * @packageDocumentation
 * @module Options
 */

/**
 * Whether buyer reserves the right to combine options a 'Option to combine' is used to capture this information
 */
export class OptionToCombine {
  /**
   * An identifier for this OptionToCombine
   */
  public id: string | number;

  /**
   * A number of options related to this OptionToCombine
   */
  public relatedOptions: Array<string | number>;
}
