/**
 * @packageDocumentation
 * @module Period
 */

import { Period } from './period';

/**
 * Key events during a contracting process may have a known start date, end date, duration,
 * or maximum extent (the latest date the period can extend to).
 * In some cases, not all of these fields will have known or relevant values.
 */
export class PeriodRange extends Period {
  /**
   * The start date for the period.
   * When known, a precise start date must be provided.
   */
  public startDate: NonNullable<Period['startDate']>;

  /**
   * The end date for the period.
   * When known, a precise end date must be provided.
   */
  public endDate: NonNullable<Period['endDate']>;
}
