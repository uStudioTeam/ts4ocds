/**
 * @packageDocumentation
 * @module Conversions.Conversion
 */

import type { Conversion } from './conversion';

/**
 * Conversion is used to describe conversions and its coefficients applicable
 * for specific value received for requirement or observation
 */
export interface RelatedConversion extends Conversion {
  /**
   * The schema element that the conversion applies.
   * For example, the conversion may be defined against a {@link Requirement | requirement} or against a {@link Observation | metric}.
   */
  relatesTo: 'requirement' | 'observation';

  /**
   * Where 'relatesTo' is not empty this field must be populated with the id of the item in this tender section
   * which the conversion relates to.
   */
  relatedItem: string;
}
