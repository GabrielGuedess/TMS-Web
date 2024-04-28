import { type Meta, type StoryFn } from '@storybook/react';

import { ProfileDeleteIcon } from '.';

import { type ProfileDeleteIconProps } from './types';

export default {
  args: { size: 24 },
  component: ProfileDeleteIcon,
  title: 'Atoms/ProfileDeleteIcon',
} as Meta<ProfileDeleteIconProps>;

export const Default: StoryFn<ProfileDeleteIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <ProfileDeleteIcon {...args} />
  </div>
);
