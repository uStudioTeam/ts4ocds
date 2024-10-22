/**
 * @packageDocumentation
 * @module Standard.Period
 */

import type { Period } from './period';

/**
 * Key events during a contracting process may have a known {@link Period.startDate | start date}, {@link Period.endDate | end date}, {@link Period.durationInDays | duration},
 * or {@link Period.maxExtentDate | maximum extent} (the latest date the period can extend to).
 * In some cases, not all of these fields will have known or relevant values.
 */
export interface RangedPeriod extends Period {
  /**
   * The start date for the period.
   * When known, a precise start date must be provided.
   */
  startDate: NonNullable<Period['startDate']>;

  /**
   * The end date for the period.
   * When known, a precise end date must be provided.
   */
  endDate: NonNullable<Period['endDate']>;
}
