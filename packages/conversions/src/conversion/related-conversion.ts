/**
 * @packageDocumentation
 * @module Conversions
 */

import { Conversion } from './conversion';

/**
 * Conversion is used to describe conversions and its coefficients applicable
 * for specific value received for requirement or observation
 */
export class RelatedConversion extends Conversion {
  /**
   * The schema element that the conversion applies.
   * For example, the conversion may be defined against a requirement or against a metric.
   */
  public relatesTo: 'requirement' | 'observation';

  /**
   * Where 'relatesTo' is not empty this field must be populated with the id of the item in this tender section
   * which the conversion relates to.
   */
  public relatedItem: string;
}