/**
 * @packageDocumentation
 * @module AddressDetails
 */

import * as Core from '@ts4ocds/core/address';
import type { Initializer } from '@ts4ocds/utils';

import type { AddressDetails } from '../address-details';

export class Address extends Core.Address {
  public addressDetails?: AddressDetails;

  public constructor(initializer: Initializer<Address>) {
    super(initializer);
  }
}
