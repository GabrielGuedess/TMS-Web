import { type Meta, type StoryFn } from '@storybook/react';

import { CheckIcon } from '.';

import { type CheckIconProps } from './types';

export default {
  args: { size: 24 },
  component: CheckIcon,
  title: 'Atoms/CheckIcon',
} as Meta<CheckIconProps>;

export const Default: StoryFn<CheckIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CheckIcon {...args} />
  </div>
);
