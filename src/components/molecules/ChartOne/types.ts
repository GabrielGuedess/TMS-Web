import { type ComponentPropsWithoutRef } from 'react';

export type ChartOneProps = ComponentPropsWithoutRef<'div'>;

export type ChartOneStateProps = {
  series: {
    name: string;
    data: number[];
  }[];
};
