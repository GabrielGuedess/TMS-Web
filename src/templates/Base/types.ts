import { type ReactNode, type ComponentPropsWithoutRef } from 'react';

export type BaseProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'main'>;
