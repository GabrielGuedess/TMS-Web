import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableLegalClientQuoteTables } from '.';

import { type DataTableLegalClientQuoteTablesProps } from './types';

export default {
  args: {},
  component: DataTableLegalClientQuoteTables,
  title: 'Organisms/DataTableLegalClientQuoteTables',
} as Meta<DataTableLegalClientQuoteTablesProps>;

export const Default: StoryFn<DataTableLegalClientQuoteTablesProps> = args => (
  <div className="w-full p-5">
    <DataTableLegalClientQuoteTables {...args} />
  </div>
);
