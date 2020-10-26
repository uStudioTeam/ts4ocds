/**
 * @packageDocumentation
 * @category Period
 */

/**
 * Key events during a contracting process may have a known start date, end date, duration,
 * or maximum extent (the latest date the period can extend to).
 * In some cases, not all of these fields will have known or relevant values.
 */
export class Period {
  /**
   * The maximum duration of this period in days.
   * A user interface can collect or display this data in months or years as appropriate,
   * and then convert it into days when storing this field.
   * This field can be used when exact dates are not known.
   * If a startDate and endDate are set, this field, if used, should be equal to the difference between startDate and endDate.
   * Otherwise, if a startDate and maxExtentDate are set, this field, if used,
   * should be equal to the difference between startDate and maxExtentDate.
   */
  public durationInDays?: number;

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

  public getRange(maxDate: Date | string): number {
    if (this.startDate && this.endDate) {
      return (new Date(maxDate).getTime() - new Date(this.startDate).getTime()) / (1000 * 60 * 60 * 24);
    }

    return -1;
  }

  public setRange(startDate: NonNullable<Period['startDate']>, endDate: NonNullable<Period['endDate']>): void {
    this.startDate = startDate;
    this.endDate = endDate;

    this.durationInDays = this.getRange(this.endDate);
  }

  public setExtent(
    startDate: NonNullable<Period['startDate']>,
    maxExtentDate: NonNullable<Period['maxExtentDate']>
  ): void {
    this.startDate = startDate;
    this.maxExtentDate = maxExtentDate;

    this.durationInDays = this.getRange(this.maxExtentDate);
  }

  public isRangeValid(): boolean {
    return Boolean(this.startDate && this.endDate && this.getRange(this.endDate) >= 0);
  }

  public isDurationValid(
    maxDate: Date | string,
    durationInDays: Period['durationInDays'] = this.durationInDays
  ): boolean {
    return durationInDays === this.getRange(maxDate);
  }
}
