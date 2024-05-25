import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableVehicleBrands } from '.';

import { type DataTableVehicleBrandsProps } from './types';

export default {
  args: {},
  component: DataTableVehicleBrands,
  title: 'Organisms/DataTableVehicleBrands',
} as Meta<DataTableVehicleBrandsProps>;

export const Default: StoryFn<DataTableVehicleBrandsProps> = args => (
  <div className="w-full p-5">
    <DataTableVehicleBrands {...args} />
  </div>
);
