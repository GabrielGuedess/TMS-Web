import { type Meta, type StoryFn } from '@storybook/react';

import { ChartThree } from '.';

import { type ChartThreeProps } from './types';

export default {
  component: ChartThree,
  title: 'Molecules/ChartThree',
} as Meta<ChartThreeProps>;

export const Default: StoryFn<ChartThreeProps> = args => (
  <div className="flex w-full justify-center p-5">
    <ChartThree className="w-full" {...args} />
  </div>
);
