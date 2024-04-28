import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableLegalClients } from '.';

import { type DataTableLegalClientsProps } from './types';

export default {
  args: {},
  component: DataTableLegalClients,
  title: 'Organisms/DataTableLegalClients',
} as Meta<DataTableLegalClientsProps>;

export const Default: StoryFn<DataTableLegalClientsProps> = args => (
  <div className="w-full p-5">
    <DataTableLegalClients {...args} />
  </div>
);
