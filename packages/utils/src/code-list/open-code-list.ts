import { ClosedCodeList } from './closed-code-list';

export class OpenCodeList<T extends string> extends ClosedCodeList<T> {
  public readonly [Symbol.toStringTag] = this.set[Symbol.toStringTag];

  protected readonly set: Set<T>;

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
