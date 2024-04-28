import { type Meta, type StoryFn } from '@storybook/react';

import { ClockIcon } from '.';

import { type ClockIconProps } from './types';

export default {
  args: { size: 24 },
  component: ClockIcon,
  title: 'Atoms/ClockIcon',
} as Meta<ClockIconProps>;

export const Default: StoryFn<ClockIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <ClockIcon {...args} />
  </div>
);
