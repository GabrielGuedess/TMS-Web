import { type Meta, type StoryFn } from '@storybook/react';

import { CaretRightIcon } from '.';

import { type CaretRightIconProps } from './types';

export default {
  component: CaretRightIcon,
  title: 'Atoms/CaretRightIcon',
  args: {
    size: 26,
    color: '#4B465C',
  },
} as Meta<CaretRightIconProps>;

export const Default: StoryFn<CaretRightIconProps> = args => (
  <div className="flex w-full justify-center py-5">
    <CaretRightIcon {...args} />
  </div>
);
