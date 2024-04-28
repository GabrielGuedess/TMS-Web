import { type Meta, type StoryFn } from '@storybook/react';

import { EyeIcon } from '.';

import { type EyeIconProps } from './types';

export default {
  args: { size: 24 },
  component: EyeIcon,
  title: 'Atoms/EyeIcon',
} as Meta<EyeIconProps>;

export const Default: StoryFn<EyeIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <EyeIcon {...args} />
  </div>
);
