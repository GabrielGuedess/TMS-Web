import { type Meta, type StoryFn } from '@storybook/react';

import { ApexChart } from '.';
import { mockApexOptions } from './mock';

import { type ApexChartProps } from './types';

export default {
  component: ApexChart,
  title: 'Atoms/ApexChart',
  args: {
    type: 'area',
    width: '100%',
    height: '100%',
    options: mockApexOptions,
    series: [
      {
        name: 'Product One',
        data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
      },

      {
        name: 'Product Two',
        data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
      },
    ],
  },
} as Meta<ApexChartProps>;

export const Default: StoryFn<ApexChartProps> = args => (
  <div className="h-96">
    <ApexChart height={384} {...args} />
  </div>
);
