import { type Meta, type StoryFn } from '@storybook/react';

import { EyeSlashIcon } from '.';

import { type EyeSlashIconProps } from './types';

export default {
  args: { size: 24 },
  component: EyeSlashIcon,
  title: 'Atoms/EyeSlashIcon',
} as Meta<EyeSlashIconProps>;

export const Default: StoryFn<EyeSlashIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <EyeSlashIcon {...args} />
  </div>
);
