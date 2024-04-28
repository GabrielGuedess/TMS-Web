import { type Meta, type StoryFn } from '@storybook/react';

import { CreateUser } from '.';

import { type CreateUserProps } from './types';

export default {
  args: {},
  component: CreateUser,
  title: 'Organisms/CreateUser',
} as Meta<CreateUserProps>;

export const Default: StoryFn<CreateUserProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateUser className="w-full" {...args} />
  </div>
);
