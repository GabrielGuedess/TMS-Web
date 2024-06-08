import { type Meta, type StoryFn } from '@storybook/react';

import { CreateOwnDriver } from '.';

import { type CreateOwnDriverProps } from './types';

export default {
  args: {},
  component: CreateOwnDriver,
  title: 'Organisms/CreateOwnDriver',
} as Meta<CreateOwnDriverProps>;

export const Default: StoryFn<CreateOwnDriverProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateOwnDriver className="w-full" {...args} />
  </div>
);
