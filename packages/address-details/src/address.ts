/**
 * @packageDocumentation
 * @module AddressDetails
 */

import { Type } from 'class-transformer';
import * as Core from '@ts4ocds/core/organization';

import { AddressDetails } from './address-details';

export class Address extends Core.Address {
  @Type(() => AddressDetails)
  public addressDetails?: AddressDetails;
}
