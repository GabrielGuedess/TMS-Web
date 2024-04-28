import { type Meta, type StoryFn } from '@storybook/react';

import { PlaneAnimation } from '.';

import { type PlaneAnimationProps } from './types';

export default {
  args: {},
  component: PlaneAnimation,
  title: 'Atoms/PlaneAnimation',
} as Meta<PlaneAnimationProps>;

export const Default: StoryFn<PlaneAnimationProps> = args => (
  <div className="flex w-full justify-center py-5">
    <PlaneAnimation {...args} />
  </div>
);
