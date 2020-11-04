/**
 * @packageDocumentation
 * @module Standard.Award
 */

import { Initializable } from '@ts4ocds/utils';

import type { Item } from '../item';
import type { Value } from '../value';
import type { Period } from '../period';
import type { Document } from '../document';
import type { Amendment } from '../amendment';
import type { AwardStatus } from './award-status';
import type { OrganizationReference } from '../organization';

/**
 * An award for the given procurement.
 * There can be more than one award per contracting process e.g. because the contract is split among different providers,
 * or because it is a standing offer.
 */
export class Award extends Initializable<Award> {
  /**
   * The identifier for this award.
   * It must be unique and must not change within the Open Contracting Process it is part of (defined by a single ocid).
   * See the [identifier guidance](https://standard.open-contracting.org/1.1/en/schema/identifiers/) for further details.
   */
  public id!: string | number;

  /**
   * Award title.
   */
  public title?: string;

  /**
   * Award description.
   */
  public description?: string;

  /**
   * The date of the contract award.
   * This is usually the date on which a decision to award was made.
   */
  public date?: Date | string;

  /**
   * The total {@link Value | value} of this award.
   * In the case of a framework contract this may be the total estimated lifetime value, or maximum value, of the agreement.
   * There may be more than one award per procurement. A negative value indicates that the award may involve payments
   * from the supplier to the buyer (commonly used in concession contracts).
   */
  public value?: Value;

  /**
   * The suppliers awarded this award.
   * If different suppliers have been awarded different {@link Item | items} or {@link Value | values}, these should be split into separate award blocks.
   */
  public suppliers!: OrganizationReference[];

  /**
   * The goods and services awarded in this award, broken into {@link Item | line items} wherever possible.
   * {@link Item | Items} should not be duplicated, but the {@link Item.quantity | quantity} specified instead.
   */
  public items!: Item[];

  /**
   * The {@link Period | period} for which the contract has been awarded.
   */
  public contractPeriod!: Period;

  /**
   * All {@link Document | documents} and attachments related to the award, including any notices.
   */
  public documents!: Document[];

  /**
   * An award {@link Amendment | amendment} is a formal change to the details of the award,
   * and generally involves the publication of a new award notice/release.
   * The {@link Amendment.rationale | rationale} and a {@link Amendment.description | description} of the changes made can be provided here.
   */
  public amendments!: Amendment[];

  /**
   * The current {@link AwardStatus | status} of the award,
   * from the closed [awardStatus](https://standard.open-contracting.org/1.1/en/schema/codelists/#award-status) codelist.
   */
  public status?: AwardStatus;
}
