import { type Meta, type StoryFn } from '@storybook/react';

import { ExpensesIcon } from '.';

export default {
  component: ExpensesIcon,
  title: 'Atoms/ExpensesIcon',
} as Meta;

export const Default: StoryFn = () => <ExpensesIcon />;
