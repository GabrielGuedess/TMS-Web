import { type Meta, type StoryFn } from '@storybook/react';

import { ProfileIcon } from '.';

import { type ProfileIconProps } from './types';

export default {
  args: { size: 24 },
  component: ProfileIcon,
  title: 'Atoms/ProfileIcon',
} as Meta<ProfileIconProps>;

export const Default: StoryFn<ProfileIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <ProfileIcon {...args} />
  </div>
);
