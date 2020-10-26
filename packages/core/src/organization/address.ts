/**
 * @packageDocumentation
 * @module Organization
 */

/**
 * An address.
 */
export class Address {
  /**
   * The street address. For example, 1600 Amphitheatre Pkwy.
   */
  public streetAddress?: string;

  /**
   * The locality. For example, Mountain View.
   */
  public locality?: string;

  /**
   * The region. For example, CA.
   */
  public region?: string;

  /**
   * The postal code. For example, 94043.
   */
  public postalCode?: string;

  /**
   * The country name. For example, United States.
   */
  public countryName?: string;
}
