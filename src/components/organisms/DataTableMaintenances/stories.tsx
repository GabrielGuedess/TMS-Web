import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableMaintenances } from '.';

import { type DataTableMaintenancesProps } from './types';

export default {
  args: {},
  component: DataTableMaintenances,
  title: 'Organisms/DataTableMaintenances',
} as Meta<DataTableMaintenancesProps>;

export const Default: StoryFn<DataTableMaintenancesProps> = args => (
  <div className="w-full p-5">
    <DataTableMaintenances {...args} />
  </div>
);
