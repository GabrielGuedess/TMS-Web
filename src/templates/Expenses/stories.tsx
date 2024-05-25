import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { Expenses } from '.';

import { type ExpensesProps } from './types';

export default {
  component: Expenses,
  title: 'Templates/Expenses',
} as Meta<ExpensesProps>;

export const Default: StoryFn<ExpensesProps> = args => (
  <Base>
    <Expenses {...args} />
  </Base>
);
