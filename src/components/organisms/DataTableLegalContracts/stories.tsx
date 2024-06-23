import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableLegalContracts } from '.';

import { type DataTableLegalContractsProps } from './types';

export default {
  args: {},
  component: DataTableLegalContracts,
  title: 'Organisms/DataTableLegalContracts',
} as Meta<DataTableLegalContractsProps>;

export const Default: StoryFn<DataTableLegalContractsProps> = args => (
  <div className="w-full p-5">
    <DataTableLegalContracts {...args} />
  </div>
);
