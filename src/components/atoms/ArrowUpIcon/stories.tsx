import { type Meta, type StoryFn } from '@storybook/react';

import { ArrowUpIcon } from '.';

import { type ArrowUpIconProps } from './types';

export default {
  args: { size: 24 },
  component: ArrowUpIcon,
  title: 'Atoms/ArrowUpIcon',
} as Meta<ArrowUpIconProps>;

export const Default: StoryFn<ArrowUpIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <ArrowUpIcon {...args} />
  </div>
);
