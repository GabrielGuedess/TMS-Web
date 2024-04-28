import { type ReactNode } from 'react';

import { type SelectItemProps as SelectItemRadixProps } from '@radix-ui/react-select';

export type SelectItemProps = {
  children: ReactNode;
} & SelectItemRadixProps;
