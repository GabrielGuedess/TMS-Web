import { type ComponentPropsWithoutRef } from 'react';

export type SearchIconProps = {
  width?: number;
  height?: number;
} & ComponentPropsWithoutRef<'svg'>;
