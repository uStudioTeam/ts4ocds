/**
 * @packageDocumentation
 * @module Conversions.Conversion
 */

import type { Conversion } from './conversion';

/**
 * Conversion is used to describe conversions and its {@link Coefficient.Coefficient | coefficients} applicability
 * for specific value received for {@link Requirement | requirement} or {@link Observation | observation}.
 */
export interface RelatedConversion extends Conversion {
  /**
   * The schema element that the conversion applies.
   * For example, the conversion may be defined against a {@link Requirement | requirement} or against a {@link Observation | metric}.
   */
  relatesTo: 'requirement' | 'observation';

  /**
   * This field must be populated with the id of the item in this tender section
   * which the conversion relates to.
   */
  relatedItem: string;
}
