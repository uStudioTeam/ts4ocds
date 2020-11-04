/**
 * @packageDocumentation
 * @module AddressDetails
 */

import { Initializable } from '@ts4ocds/utils';
import type { Classification } from '@ts4ocds/core/classification';

export class AddressDetails<NC extends string = string> extends Initializable<AddressDetails<NC>> {
  /**
   * Country code according to ['iso-alpha2'](https://www.iso.org/obp/ui/#search) {@link Classification | classifier}.
   */
  public country?: Classification;

  /**
   * Region code according to ['iso-alpha2'](https://www.iso.org/obp/ui/#search) {@link Classification | classifier}.
   */
  public region?: Classification;

  /**
   * Locality code according to either ['UN/LOCDE'](https://www.unece.org/cefact/locode/service/location.html) or any applicable local {@link Classification | classifier}.
   */
  public locality?: Classification;

  /**
   * The most detailed level of NUTS codes, NUTS 3 should be used and it should be taken from the
   * [EU codelist](http://ec.europa.eu/eurostat/ramon/index.cfm?TargetUrl=DSP_PUB_WELC).
   */
  public NUTSCode?: NC;
}
