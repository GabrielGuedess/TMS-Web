import { type Meta, type StoryFn } from '@storybook/react';

import { CreateExpense } from '.';

import { type CreateExpenseProps } from './types';

export default {
  args: {},
  component: CreateExpense,
  title: 'Organisms/CreateExpense',
} as Meta<CreateExpenseProps>;

export const Default: StoryFn<CreateExpenseProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateExpense className="w-full" {...args} />
  </div>
);
