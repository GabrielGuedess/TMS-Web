import { type Meta, type StoryFn } from '@storybook/react';

import { ExpenseGeneral } from '.';

import { type ExpenseGeneralProps } from './types';

export default {
  args: {},
  component: ExpenseGeneral,
  title: 'Organisms/ExpenseGeneral',
} as Meta<ExpenseGeneralProps>;

export const Default: StoryFn<ExpenseGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <ExpenseGeneral className="w-full" {...args} />
  </div>
);
