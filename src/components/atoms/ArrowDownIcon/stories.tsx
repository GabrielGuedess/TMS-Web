import { type Meta, type StoryFn } from '@storybook/react';

import { ArrowDownIcon } from '.';

import { type ArrowDownIconProps } from './types';

export default {
  args: { size: 24 },
  component: ArrowDownIcon,
  title: 'Atoms/ArrowDownIcon',
} as Meta<ArrowDownIconProps>;

export const Default: StoryFn<ArrowDownIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <ArrowDownIcon {...args} />
  </div>
);
