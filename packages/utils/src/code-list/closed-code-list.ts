export class ClosedCodeList<T extends string> {
  protected readonly set: ReadonlySet<T>;

  public constructor(values: readonly T[]) {
    this.set = new Set(values);
  }

  public get size(): number {
    return this.set.size;
  }

  public [Symbol.iterator](): IterableIterator<T> {
    return this.set[Symbol.iterator]();
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
