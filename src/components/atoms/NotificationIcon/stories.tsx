import { type Meta, type StoryFn } from '@storybook/react';

import { NotificationIcon } from '.';

import { type NotificationIconProps } from './types';

export default {
  args: { size: 24 },
  component: NotificationIcon,
  title: 'Atoms/NotificationIcon',
} as Meta<NotificationIconProps>;

export const Default: StoryFn<NotificationIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <NotificationIcon {...args} />
  </div>
);
