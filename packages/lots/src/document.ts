/**
 *  @packageDocumentation
 *  @module Lots
 */

import * as Core from '@ts4ocds/core/document';

import { WithRelatedLots } from './mixins';

/**
 * If this document relates to the particular lot(s), provide the identifier(s) of the related lot(s) here.
 */
export class Document extends WithRelatedLots(Core.Document) {}
