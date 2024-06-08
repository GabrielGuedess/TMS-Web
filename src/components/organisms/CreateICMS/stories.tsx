import { type Meta, type StoryFn } from '@storybook/react';

import { CreateICMS } from '.';

import { type CreateICMSProps } from './types';

export default {
  args: {},
  component: CreateICMS,
  title: 'Organisms/CreateICMS',
} as Meta<CreateICMSProps>;

export const Default: StoryFn<CreateICMSProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateICMS className="w-full" {...args} />
  </div>
);
