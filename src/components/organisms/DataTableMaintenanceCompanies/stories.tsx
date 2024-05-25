import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableMaintenanceCompanies } from '.';

import { type DataTableMaintenanceCompaniesProps } from './types';

export default {
  args: {},
  component: DataTableMaintenanceCompanies,
  title: 'Organisms/DataTableMaintenanceCompanies',
} as Meta<DataTableMaintenanceCompaniesProps>;

export const Default: StoryFn<DataTableMaintenanceCompaniesProps> = args => (
  <div className="w-full p-5">
    <DataTableMaintenanceCompanies {...args} />
  </div>
);
