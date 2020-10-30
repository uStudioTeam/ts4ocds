/**
 * @packageDocumentation
 * @module RelatedProcess
 */

import type { Initializer } from '@ts4ocds/utils';

import type { Scheme } from './scheme';
import type { Relationship } from './relationship';

/**
 * A reference to a related contracting process: generally one preceding or following on from the current process.
 */
export class RelatedProcess<R extends Relationship | string = Relationship, S extends Scheme | string = Scheme> {
  /**
   * A local identifier for this relationship, unique within this array.
   */
  public id: string;

  /**
   * The title of the related process, where referencing an open contracting process,
   * this field should match the tender/title field in the related process.
   */
  public title?: string;

  /**
   * The type of relationship,
   * using the open [relatedProcess](https://standard.open-contracting.org/1.1/en/schema/codelists/#related-process) codelist.
   */
  public relationship?: R[];

  /**
   * The identification scheme used by this cross-reference,
   * using the open [relatedProcessScheme](https://standard.open-contracting.org/1.1/en/schema/codelists/#related-process-scheme) codelist.
   */
  public scheme: S;

  /**
   * The identifier of the related process.
   * If the scheme is 'ocid', this must be an Open Contracting ID (ocid).
   */
  public identifier?: string;

  /**
   * A URI pointing to a machine-readable document, release or record package containing the identified related process.
   */
  public uri?: string;

  public constructor(initializer: Initializer<RelatedProcess<R, S>>) {
    Object.assign(this, initializer);
  }
}
