import { type Meta, type StoryFn } from '@storybook/react';

import { CreateSender } from '.';

import { type CreateSenderProps } from './types';

export default {
  args: {},
  component: CreateSender,
  title: 'Organisms/CreateSender',
} as Meta<CreateSenderProps>;

export const Default: StoryFn<CreateSenderProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateSender className="w-full" {...args} />
  </div>
);
