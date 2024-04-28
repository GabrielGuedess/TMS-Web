import { type Meta, type StoryFn } from '@storybook/react';

import { ProfileSearchIcon } from '.';

import { type ProfileSearchIconProps } from './types';

export default {
  args: { size: 24 },
  component: ProfileSearchIcon,
  title: 'Atoms/ProfileSearchIcon',
} as Meta<ProfileSearchIconProps>;

export const Default: StoryFn<ProfileSearchIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <ProfileSearchIcon {...args} />
  </div>
);
