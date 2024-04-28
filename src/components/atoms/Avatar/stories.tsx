import { type Meta, type StoryFn } from '@storybook/react';

import { Avatar } from '.';

import { type AvatarProps } from './types';

export default {
  component: Avatar,
  title: 'Atoms/Avatar',
  args: {
    alt: 'Gabriel',
    src: 'https://avatars.githubusercontent.com/u/64827875?v=4',
  },
} as Meta<AvatarProps>;

export const Default: StoryFn<AvatarProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <Avatar {...args} />
  </div>
);
