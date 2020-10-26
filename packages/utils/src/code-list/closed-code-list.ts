export class ClosedCodeList<T extends string> {
  public readonly size: number;

  protected readonly set: ReadonlySet<T>;

  public constructor(values: readonly T[] | null) {
    this.set = new Set(values);
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return this.set[Symbol.iterator]();
  }

  public entries(): IterableIterator<[T, T]> {
    return this.set.entries();
  }

  public keys(): IterableIterator<T> {
    return this.set.keys();
  }

  public values(): IterableIterator<T> {
    return this.set.values();
  }

  public forEach(callbackfn: (value: T, value2: T, set: ReadonlySet<T>) => void): void {
    this.set.forEach(callbackfn);
  }

  public has(value: string): value is T {
    return this.set.has(value as T);
  }
}
