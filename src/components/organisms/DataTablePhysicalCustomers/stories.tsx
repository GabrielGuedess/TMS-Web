import { type Meta, type StoryFn } from '@storybook/react';

import { DataTablePhysicalCustomers } from '.';

import { type DataTablePhysicalCustomersProps } from './types';

export default {
  args: {},
  component: DataTablePhysicalCustomers,
  title: 'Organisms/DataTablePhysicalCustomers',
} as Meta<DataTablePhysicalCustomersProps>;

export const Default: StoryFn<DataTablePhysicalCustomersProps> = args => (
  <div className="w-full p-5">
    <DataTablePhysicalCustomers {...args} />
  </div>
);
