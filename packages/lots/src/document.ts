/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/document';
import type { Initializer } from '@ts4ocds/utils';

import { WithRelatedLots } from './mixins';

/**
 * If this document relates to the particular lot(s), provide the identifier(s) of the related lot(s) here.
 */
export class Document<DT extends Core.DocumentType = Core.DocumentType> extends WithRelatedLots(Core.Document) {
  public documentType?: Core.Document<DT>['documentType'];

  public constructor(initializer: Initializer<Document<DT>>) {
    super(initializer);
  }
}
