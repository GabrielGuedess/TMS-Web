export type OptionalProps<T> = {
  [K in keyof T as `${string & K}`]?: T[K];
};
