import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableVehicleBodyWorks } from '.';

import { type DataTableVehicleBodyWorksProps } from './types';

export default {
  args: {},
  component: DataTableVehicleBodyWorks,
  title: 'Organisms/DataTableVehicleBodyWorks',
} as Meta<DataTableVehicleBodyWorksProps>;

export const Default: StoryFn<DataTableVehicleBodyWorksProps> = args => (
  <div className="w-full p-5">
    <DataTableVehicleBodyWorks {...args} />
  </div>
);
