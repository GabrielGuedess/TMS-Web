import { type ReactNode, type ComponentPropsWithoutRef } from 'react';

export type ContainerProps = {
  children: ReactNode;
} & ComponentPropsWithoutRef<'div'>;
