/**
 * @packageDocumentation
 * @module Amendment
 */

import type { Initializer } from '@ts4ocds/utils';

/**
 * Amendment information
 */
export class Amendment {
  /**
   * An identifier for this amendment: often the amendment number
   */
  public id?: string;

  /**
   * A free text, or semi-structured, description of the changes made in this amendment.
   */
  public description?: string;

  /**
   * The date of this amendment.
   */
  public date?: Date | string;

  /**
   * An explanation for the amendment.
   */
  public rationale?: string;

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

  public constructor(initializer: Initializer<Amendment>) {
    Object.assign(this, initializer);
  }
}
