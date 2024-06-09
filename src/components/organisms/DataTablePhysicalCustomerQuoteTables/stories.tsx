import { type Meta, type StoryFn } from '@storybook/react';

import { DataTablePhysicalCustomerQuoteTables } from '.';

import { type DataTablePhysicalCustomerQuoteTablesProps } from './types';

export default {
  args: {},
  component: DataTablePhysicalCustomerQuoteTables,
  title: 'Organisms/DataTablePhysicalCustomerQuoteTables',
} as Meta<DataTablePhysicalCustomerQuoteTablesProps>;

export const Default: StoryFn<
  DataTablePhysicalCustomerQuoteTablesProps
> = args => (
  <div className="w-full p-5">
    <DataTablePhysicalCustomerQuoteTables {...args} />
  </div>
);
