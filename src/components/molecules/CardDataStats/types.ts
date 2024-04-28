import { type ElementType, type ComponentPropsWithoutRef } from 'react';

export type CardDataStatsProps = {
  rate: string;
  title: string;
  total: string;
  isPositive?: boolean;
  icon: ElementType<{ size?: number } & ComponentPropsWithoutRef<'svg'>>;
} & ComponentPropsWithoutRef<'div'>;
