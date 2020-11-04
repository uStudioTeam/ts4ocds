/**
 * @packageDocumentation
 * @module Standard.Period
 */

import { Initializable } from '@ts4ocds/utils';

import type { RangedPeriod } from './ranged-period';
import type { ExtendedPeriod } from './extended-period';

/**
 * Key events during a contracting process may have a known {@link Period.startDate | start date}, {@link Period.endDate | end date}, {@link Period.durationInDays | duration},
 * or {@link Period.maxExtentDate | maximum extent} (the latest date the period can extend to).
 * In some cases, not all of these fields will have known or relevant values.
 */
export class Period extends Initializable<Period> {
  /**
   * The start date for the period.
   * When known, a precise start date must be provided.
   */
  public startDate?: Date | string;

  /**
   * The end date for the period.
   * When known, a precise end date must be provided.
   */
  public endDate?: Date | string;

  /**
   * The period cannot be extended beyond this date.
   * This field can be used to express the maximum available date for extension or renewal of this period.
   */
  public maxExtentDate?: Date | string;

  /**
   * The maximum duration of this period in days.
   * A user interface can collect or display this data in months or years as appropriate,
   * and then convert it into days when storing this field.
   * This field can be used when exact dates are not known.
   * If a {@link Period.startDate | `startDate`} and {@link Period.endDate | `endDate`} are set, this field, if used,
   * should be equal to the difference between {@link Period.startDate | `startDate`} and {@link Period.endDate | `endDate`}.
   * Otherwise, if a {@link Period.startDate | `startDate`} and {@link Period.maxExtentDate | `maxExtentDate`} are set, this field, if used,
   * should be equal to the difference between {@link Period.startDate | `startDate`} and {@link Period.maxExtentDate | `maxExtentDate`}.
   */
  public durationInDays?: number;

  /**
   * Used to check if this `period` is defined through the use of {@link Period.startDate | `startDate`} and {@link Period.maxExtentDate | `maxExtentDate`} fields.
   */
  public isExtended(): this is ExtendedPeriod {
    return this.startDate !== undefined && this.maxExtentDate !== undefined;
  }

  /**
   * Used to check if this `period` is defined through the use of `{@link Period.startDate | `startDate`} and {@link Period.endDate | `endDate`} fields.
   */
  public isRanged(): this is RangedPeriod {
    return this.startDate !== undefined && this.endDate !== undefined;
  }

  /**
   * Returns the range of dates this `period` is being valid for.
   */
  public getRange(maxDate: Date | string): number {
    return (new Date(maxDate).getTime() - new Date(this.startDate || '').getTime()) / (1000 * 60 * 60 * 24) ?? -1;
  }

  /**
   * Sets the range for this `period`.
   */
  public setRange(startDate: NonNullable<Period['startDate']>, endDate: NonNullable<Period['endDate']>): void {
    this.startDate = startDate;
    this.endDate = endDate;

    this.durationInDays = this.getRange(this.endDate);
  }

  /**
   * Sets the extent for this `period`.
   */
  public setExtent(
    startDate: NonNullable<Period['startDate']>,
    maxExtentDate: NonNullable<Period['maxExtentDate']>
  ): void {
    this.startDate = startDate;
    this.maxExtentDate = maxExtentDate;

    this.durationInDays = this.getRange(this.maxExtentDate);
  }

  /**
   * Checks if this `period`'s range is valid according to `{@link Period.durationInDays}` description.
   */
  public isRangeValid(): boolean {
    return Boolean(this.getRange(this.endDate as Date) >= 0);
  }

  /**
   *
   * Checks if this `period`'s duration is valid according to `{@link Period.durationInDays}` description.
   */
  public isDurationValid(
    maxDate: Date | string,
    durationInDays: Period['durationInDays'] = this.durationInDays
  ): boolean {
    return durationInDays === this.getRange(maxDate);
  }
}
