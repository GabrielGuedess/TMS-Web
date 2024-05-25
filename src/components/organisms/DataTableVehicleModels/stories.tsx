import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableVehicleModels } from '.';

import { type DataTableVehicleModelsProps } from './types';

export default {
  args: {},
  component: DataTableVehicleModels,
  title: 'Organisms/DataTableVehicleModels',
} as Meta<DataTableVehicleModelsProps>;

export const Default: StoryFn<DataTableVehicleModelsProps> = args => (
  <div className="w-full p-5">
    <DataTableVehicleModels {...args} />
  </div>
);
