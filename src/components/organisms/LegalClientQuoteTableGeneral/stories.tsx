import { type Meta, type StoryFn } from '@storybook/react';

import { OverviewLegalClientQuoteTable } from '.';

import { type OverviewLegalClientQuoteTableProps } from './types';

export default {
  args: {},
  component: OverviewLegalClientQuoteTable,
  title: 'Organisms/OverviewLegalClientQuoteTable',
} as Meta<OverviewLegalClientQuoteTableProps>;

export const Default: StoryFn<OverviewLegalClientQuoteTableProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <OverviewLegalClientQuoteTable className="w-full" {...args} />
  </div>
);
