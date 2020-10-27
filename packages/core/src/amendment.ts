/**
 * @packageDocumentation
 * @module Amendment
 */

import { Type } from 'class-transformer';

/**
 * Amendment information
 */
export class Amendment {
  /**
   * The date of this amendment.
   */
  @Type(() => Date)
  public date?: Date | string;

  /**
   * An explanation for the amendment.
   */
  public rationale?: string;

  /**
   * An identifier for this amendment: often the amendment number
   */
  public id?: string;

  /**
   * A free text, or semi-structured, description of the changes made in this amendment.
   */
  public description?: string;

  /**
   * Provide the identifier (release.id) of the OCDS release (from this contracting process)
   * that provides the values for this contracting process **before** the amendment was made.
   */
  public amendsReleaseID?: string;

  /**
   * Provide the identifier (release.id) of the OCDS release (from this contracting process)
   * that provides the values for this contracting process **after** the amendment was made.
   */
  public releaseID?: string;
}
