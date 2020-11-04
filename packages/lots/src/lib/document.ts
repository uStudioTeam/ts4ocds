/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/document';
import type { Initializer } from '@ts4ocds/utils';

import { WithRelatedLots } from '../mixins';

/**
 * If this document relates to one or more specific {@link Lot | lots}, provide the {@link Lot.id | identifier(s)} of the related {@link Lot | lot(s)} here.
 */
export class Document<DT extends Core.DocumentType = Core.DocumentType> extends WithRelatedLots(Core.Document) {
  public documentType?: Core.Document<DT>['documentType'];

  public constructor(initializer: Initializer<Document<DT>>) {
    super(initializer);
  }
}
