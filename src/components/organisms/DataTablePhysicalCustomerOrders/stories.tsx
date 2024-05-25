import { type Meta, type StoryFn } from '@storybook/react';

import { DataTablePhysicalCustomerOrders } from '.';

import { type DataTablePhysicalCustomerOrdersProps } from './types';

export default {
  args: {},
  component: DataTablePhysicalCustomerOrders,
  title: 'Organisms/DataTablePhysicalCustomerOrders',
} as Meta<DataTablePhysicalCustomerOrdersProps>;

export const Default: StoryFn<DataTablePhysicalCustomerOrdersProps> = args => (
  <div className="w-full p-5">
    <DataTablePhysicalCustomerOrders {...args} />
  </div>
);
