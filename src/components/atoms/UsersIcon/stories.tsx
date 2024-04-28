import { type Meta, type StoryFn } from '@storybook/react';

import { UsersIcon } from '.';

import { type UsersIconProps } from './types';

export default {
  component: UsersIcon,
  title: 'Atoms/UsersIcon',
} as Meta<UsersIconProps>;

export const Default: StoryFn<UsersIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <UsersIcon {...args} />
  </div>
);
