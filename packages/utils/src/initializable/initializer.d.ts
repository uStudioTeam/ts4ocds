export type Initializer<T> = Pick<
  T,
  NonNullable<{ [K in keyof T]: T[K] extends (...args: any[]) => any ? never : K }[keyof T]>
>;
