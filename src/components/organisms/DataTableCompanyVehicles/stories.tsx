import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableCompanyVehicles } from '.';

import { type DataTableCompanyVehiclesProps } from './types';

export default {
  args: {},
  component: DataTableCompanyVehicles,
  title: 'Organisms/DataTableCompanyVehicles',
} as Meta<DataTableCompanyVehiclesProps>;

export const Default: StoryFn<DataTableCompanyVehiclesProps> = args => (
  <div className="w-full p-5">
    <DataTableCompanyVehicles {...args} />
  </div>
);
