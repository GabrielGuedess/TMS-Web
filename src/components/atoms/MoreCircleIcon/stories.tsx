import { type Meta, type StoryFn } from '@storybook/react';

import { MoreCircleIcon } from '.';

import { type MoreCircleIconProps } from './types';

export default {
  args: { size: 24 },
  component: MoreCircleIcon,
  title: 'Atoms/MoreCircleIcon',
} as Meta<MoreCircleIconProps>;

export const Default: StoryFn<MoreCircleIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <MoreCircleIcon {...args} />
  </div>
);
