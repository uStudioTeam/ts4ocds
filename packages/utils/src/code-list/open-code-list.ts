/**
 * @packageDocumentation
 * @module Utilities.CodeList
 */

import { ClosedCodeList } from './closed-code-list';

/**
 * Type-safe interface over the native `Set` with all methods (except for {@link OpenCodeList.forEach | forEach}) being immutable.
 */
export class OpenCodeList<T extends string> extends ClosedCodeList<T> {
  /**
   * @ignore
   */
  public readonly [Symbol.toStringTag] = this.set[Symbol.toStringTag];

  protected readonly set!: Set<T>;

  public constructor(values: readonly T[] | null) {
    super(values || []);
  }

  public add<V extends string>(value: V | readonly V[]): OpenCodeList<T | V> {
    return new OpenCodeList([...this.set, ...[Array.isArray(value) ? value : [value]]] as ReadonlyArray<T | V>);
  }

  public clear(): OpenCodeList<string> {
    this.set.clear();

    return new OpenCodeList(null);
  }

  public delete<V extends T>(value: V): OpenCodeList<Exclude<T, V>> {
    this.set.delete(value);

    return new OpenCodeList((this.set as unknown) as ReadonlyArray<Exclude<T, V>>);
  }

  public forEach(callbackfn: (value: T, value2: T, set: Set<T>) => void): void {
    super.forEach(callbackfn as Parameters<ClosedCodeList<T>['forEach']>[0]);
  }
}
