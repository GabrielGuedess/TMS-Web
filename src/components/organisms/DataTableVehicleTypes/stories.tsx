import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableVehicleTypes } from '.';

import { type DataTableVehicleTypesProps } from './types';

export default {
  args: {},
  component: DataTableVehicleTypes,
  title: 'Organisms/DataTableVehicleTypes',
} as Meta<DataTableVehicleTypesProps>;

export const Default: StoryFn<DataTableVehicleTypesProps> = args => (
  <div className="w-full p-5">
    <DataTableVehicleTypes {...args} />
  </div>
);
