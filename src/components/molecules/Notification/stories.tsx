import { type Meta, type StoryFn } from '@storybook/react';

import { Notification } from '.';

import { type NotificationProps } from './types';

export default {
  component: Notification,
  title: 'Molecules/Notification',
} as Meta<NotificationProps>;

export const Default: StoryFn<NotificationProps> = args => (
  <div className="flex w-full justify-center py-5">
    <Notification {...args} />
  </div>
);
