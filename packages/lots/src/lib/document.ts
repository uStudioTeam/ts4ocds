/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/document';
import type { Initializer } from '@ts4ocds/utils';
import type { DocumentType } from '@ts4ocds/core/document';

import { WithRelatedLots } from '../mixins';

/**
 * If this document relates to one or more specific {@link Lot | lots}, provide the {@link Lot.id | identifier(s)} of the related {@link Lot | lot(s)} here.
 *
 * @param DT
 * A {@link Document.documentType | classification} of the document described,
 * using the open [documentType](https://standard.open-contracting.org/1.1/en/schema/codelists/#document-type) codelist.
 */
export class Document<DT extends DocumentType = DocumentType> extends WithRelatedLots(Core.Document) {
  /**
   * A {@link DocumentType | classification} of the document described,
   * using the open [documentType](https://standard.open-contracting.org/1.1/en/schema/codelists/#document-type) codelist.
   */
  public documentType?: Core.Document<DT>['documentType'];

  public constructor(initializer: Initializer<Document<DT>>) {
    super(initializer);
  }
}
