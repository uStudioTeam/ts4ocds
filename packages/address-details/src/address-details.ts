/**
 * @packageDocumentation
 * @module AddressDetails
 */

import { Type } from 'class-transformer';
import { Classification } from '@ts4ocds/core/classification';

export class AddressDetails<
  CD extends string = string,
  RD extends string = string,
  LD extends string = string,
  NC extends string = string
> {
  /**
   * Country code according to ['iso-alpha2'](https://www.iso.org/obp/ui/#search) classifier
   */
  @Type(() => Classification)
  public countryDetails?: Classification<CD>;

  /**
   * Region code according to ['iso-alpha2'](https://www.iso.org/obp/ui/#search) classifier
   */
  @Type(() => Classification)
  public regionDetails?: Classification<RD>;

  /**
   * Locality code according to either ['UN/LOCDE'](https://www.unece.org/cefact/locode/service/location.html) or any applicable local classifier
   */
  @Type(() => Classification)
  public localityDetails?: Classification<LD>;

  /**
   * The most detailed level of NUTS codes, NUTS 3 should be used and it should be taken from the EU codelist linked from
   * [](http://ec.europa.eu/eurostat/ramon/index.cfm?TargetUrl=DSP_PUB_WELC).
   */
  @Type(() => String)
  public NUTSCode?: NC;
}
