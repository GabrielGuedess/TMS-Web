import { type Meta, type StoryFn } from '@storybook/react';

import { ChartOne } from '.';

import { type ChartOneProps } from './types';

export default {
  component: ChartOne,
  title: 'Molecules/ChartOne',
} as Meta<ChartOneProps>;

export const Default: StoryFn<ChartOneProps> = args => (
  <div className="flex w-full justify-center p-5">
    <ChartOne {...args} />
  </div>
);
