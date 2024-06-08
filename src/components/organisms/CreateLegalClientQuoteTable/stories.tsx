import { type Meta, type StoryFn } from '@storybook/react';

import { CreateLegalClientQuoteTable } from '.';

import { type CreateLegalClientQuoteTableProps } from './types';

export default {
  args: {},
  component: CreateLegalClientQuoteTable,
  title: 'Organisms/CreateLegalClientQuoteTable',
} as Meta<CreateLegalClientQuoteTableProps>;

export const Default: StoryFn<CreateLegalClientQuoteTableProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateLegalClientQuoteTable className="w-full" {...args} />
  </div>
);
