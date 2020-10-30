/**
 * @packageDocumentation
 * @module Organization
 */

import type { Initializer } from '@ts4ocds/utils';

/**
 * A person, contact point or department to contact in relation to this contracting process.
 */
export class ContactPoint {
  /**
   * The name of the contact person, department, or contact point, for correspondence relating to this contracting process.
   */
  public name?: string;

  /**
   * The e-mail address of the contact point/person.
   */
  public email?: string;

  /**
   * The telephone number of the contact point/person. This should include the international dialing code.
   */
  public telephone?: string;

  /**
   * The fax number of the contact point/person. This should include the international dialing code.
   */
  public faxNumber?: string;

  /**
   * A web address for the contact point/person.
   */
  public url?: string;

  public constructor(initializer: Initializer<ContactPoint>) {
    Object.assign(this, initializer);
  }
}
