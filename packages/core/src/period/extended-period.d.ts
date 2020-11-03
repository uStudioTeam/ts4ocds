/**
 * @packageDocumentation
 * @module Standard.Period
 */

import type { Period } from './period';

/**
 * Key events during a contracting process may have a known start date, end date, duration,
 * or maximum extent (the latest date the period can extend to).
 * In some cases, not all of these fields will have known or relevant values.
 */
export interface ExtendedPeriod extends Period {
  /**
   * The start date for the period.
   * When known, a precise start date must be provided.
   */
  startDate: NonNullable<Period['startDate']>;

  /**
   * The period cannot be extended beyond this date.
   * This field can be used to express the maximum available date for extension or renewal of this period.
   */
  maxExtentDate: NonNullable<Period['maxExtentDate']>;
}
