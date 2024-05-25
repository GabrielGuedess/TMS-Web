import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableLegalClientOrders } from '.';

import { type DataTableLegalClientOrdersProps } from './types';

export default {
  args: {},
  component: DataTableLegalClientOrders,
  title: 'Organisms/DataTableLegalClientOrders',
} as Meta<DataTableLegalClientOrdersProps>;

export const Default: StoryFn<DataTableLegalClientOrdersProps> = args => (
  <div className="w-full p-5">
    <DataTableLegalClientOrders {...args} />
  </div>
);
