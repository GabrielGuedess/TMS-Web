import { type Meta, type StoryFn } from '@storybook/react';

import { ClockCircleIcon } from '.';

import { type ClockCircleIconProps } from './types';

export default {
  args: { size: 24 },
  component: ClockCircleIcon,
  title: 'Atoms/ClockCircleIcon',
} as Meta<ClockCircleIconProps>;

export const Default: StoryFn<ClockCircleIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <ClockCircleIcon {...args} />
  </div>
);
