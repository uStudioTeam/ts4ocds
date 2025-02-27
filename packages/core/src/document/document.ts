/**
 * @packageDocumentation
 * @module Standard.Document
 */

import { Initializable } from '@ts4ocds/utils';

import type { DocumentType } from './document-type';

/**
 * {@link Document.url | Links to}, or {@link Document.description}, external documents can be attached at various locations within the standard.
 * Documents can be supporting information, formal notices, downloadable forms,
 * or any other kind of resource that ought to be made public as part of full open contracting.
 *
 * @param DT
 * A {@link Document.documentType | classification} of the document described,
 * using the open [documentType](https://standard.open-contracting.org/1.1/en/schema/codelists/#document-type) codelist.
 */
export class Document<DT extends DocumentType = DocumentType> extends Initializable<Document<DT>> {
  /**
   * A local, unique identifier for this document.
   * This field is used to keep track of multiple revisions of a document through the compilation from release to record mechanism.
   */
  public id!: string | number;

  /**
   * The document title.
   */
  public title?: string;

  /**
   * A short description of the document.
   * Descriptions are recommended to not exceed 250 words.
   * In the event the document is not accessible online,
   * the description field can be used to describe arrangements for obtaining a copy of the document.
   */
  public description?: string;

  /**
   * A {@link DocumentType | classification} of the document described,
   * using the open [documentType](https://standard.open-contracting.org/1.1/en/schema/codelists/#document-type) codelist.
   */
  public documentType?: DT | string;

  /**
   * The date on which the document was first published.
   * This is particularly important for legally important documents such as notices of a tender.
   */
  public datePublished?: Date | string;

  /**
   * Date that the document was last modified.
   */
  public dateModified?: Date | string;

  /**
   * A direct link to the document or attachment.
   * The server providing access to this document ought to be configured to correctly report the document mime type.
   */
  public url?: string;

  /**
   * The format of the document, using the open [IANA Media Types](http://www.iana.org/assignments/media-types/) codelist
   * (see the values in the 'Template' column), or using the `offline/print` code if the described document is published offline.
   * For example, web pages have a format of `text/html`.
   */
  public format?: string;

  /**
   * The language of the linked document using either two-letter [ISO639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes),
   * or extended [BCP47 language tags](http://www.w3.org/International/articles/language-tags/).
   * The use of lowercase two-letter codes from [ISO639-1](https://en.wikipedia.org/wiki/List_of_ISO_639-1_codes)
   * is recommended unless there is a clear user need for distinguishing the language subtype.
   */
  public language?: string;
}
