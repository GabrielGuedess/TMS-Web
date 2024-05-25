import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableExpenses } from '.';

import { type DataTableExpensesProps } from './types';

export default {
  args: {},
  component: DataTableExpenses,
  title: 'Organisms/DataTableExpenses',
} as Meta<DataTableExpensesProps>;

export const Default: StoryFn<DataTableExpensesProps> = args => (
  <div className="w-full p-5">
    <DataTableExpenses {...args} />
  </div>
);
