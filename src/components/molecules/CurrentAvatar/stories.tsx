import { type Meta, type StoryFn } from '@storybook/react';

import { CurrentAvatar } from '.';

import { type CurrentAvatarProps } from './types';

export default {
  args: {},
  component: CurrentAvatar,
  title: 'Molecules/CurrentAvatar',
} as Meta<CurrentAvatarProps>;

export const Default: StoryFn<CurrentAvatarProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CurrentAvatar {...args} />
  </div>
);
