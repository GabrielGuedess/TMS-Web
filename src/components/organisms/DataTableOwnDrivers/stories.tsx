import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableOwnDrivers } from '.';

import { type DataTableOwnDriversProps } from './types';

export default {
  args: {},
  component: DataTableOwnDrivers,
  title: 'Organisms/DataTableOwnDrivers',
} as Meta<DataTableOwnDriversProps>;

export const Default: StoryFn<DataTableOwnDriversProps> = args => (
  <div className="w-full p-5">
    <DataTableOwnDrivers {...args} />
  </div>
);
