/**
 * @packageDocumentation
 * @module Contract
 */

import { Type } from 'class-transformer';

import { Value } from '../value';
import { OrganizationReference } from '../organization';

/**
 * A spending transaction related to the contracting process.
 * Draws upon the data models of the [Fiscal Data Package](https://frictionlessdata.io/specs/fiscal-data-package/)
 * and the [International Aid Transparency Initiative](http://iatistandard.org/activity-standard/iati-activities/iati-activity/transaction/)
 * and should be used to cross-reference to more detailed information held using a Fiscal Data Package, IATI file,
 * or to provide enough information to allow a user to manually or automatically cross-reference with some other
 * published source of transactional spending data.
 */
export class Transaction {
  /**
   * The date of the transaction
   */
  @Type(() => Date)
  public date?: Date | string;

  /**
   * The value of the transaction.
   */
  @Type(() => Value)
  public value: Value;

  /**
   * An organization reference for the organization from which the funds in this transaction originate.
   */
  @Type(() => OrganizationReference)
  public payer: OrganizationReference;

  /**
   * An organization reference for the organization which receives the funds in this transaction.
   */
  @Type(() => OrganizationReference)
  public payee: OrganizationReference;

  /**
   * A unique identifier for this transaction.
   * This identifier should be possible to cross-reference against the provided data source. For IATI this is the transaction reference.
   */
  public id: string | number;

  /**
   * Used to point either to a corresponding Fiscal Data Package, IATI file,
   * or machine or human-readable source where users can find further information on the budget line item identifiers,
   * or project identifiers, provided here.
   */
  public source?: string;

  /**
   * A URI pointing directly to a machine-readable record about this spending transaction.
   */
  public uri?: string;
}
