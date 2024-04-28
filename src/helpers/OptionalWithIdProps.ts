export type OptionalWithIdProps<T> = {
  [K in keyof T]: K extends 'id' ? T[K] : T[K] | undefined;
};
