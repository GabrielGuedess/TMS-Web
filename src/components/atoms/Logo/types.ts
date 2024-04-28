import { type ComponentPropsWithoutRef } from 'react';

export type LogoProps = {
  size?: number;
} & ComponentPropsWithoutRef<'svg'>;
