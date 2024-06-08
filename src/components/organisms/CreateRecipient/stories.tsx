import { type Meta, type StoryFn } from '@storybook/react';

import { CreateRecipient } from '.';

import { type CreateRecipientProps } from './types';

export default {
  args: {},
  component: CreateRecipient,
  title: 'Organisms/CreateRecipient',
} as Meta<CreateRecipientProps>;

export const Default: StoryFn<CreateRecipientProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateRecipient className="w-full" {...args} />
  </div>
);
