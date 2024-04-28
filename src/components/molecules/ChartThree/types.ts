import { type ComponentPropsWithoutRef } from 'react';

export type ChartThreeProps = ComponentPropsWithoutRef<'div'>;

export type ChartThreeStateProps = {
  series: {
    name: string;
    data: number[];
  }[];
};
