import { type Meta, type StoryFn } from '@storybook/react';

import { LinearWalletIcon } from '.';

import { type LinearWalletIconProps } from './types';

export default {
  args: { size: 24 },
  component: LinearWalletIcon,
  title: 'Atoms/LinearWalletIcon',
} as Meta<LinearWalletIconProps>;

export const Default: StoryFn<LinearWalletIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <LinearWalletIcon {...args} />
  </div>
);
