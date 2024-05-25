import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableIncidents } from '.';

import { type DataTableIncidentsProps } from './types';

export default {
  args: {},
  component: DataTableIncidents,
  title: 'Organisms/DataTableIncidents',
} as Meta<DataTableIncidentsProps>;

export const Default: StoryFn<DataTableIncidentsProps> = args => (
  <div className="w-full p-5">
    <DataTableIncidents {...args} />
  </div>
);
