import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableCarriers } from '.';

import { type DataTableCarriersProps } from './types';

export default {
  args: {},
  component: DataTableCarriers,
  title: 'Organisms/DataTableCarriers',
} as Meta<DataTableCarriersProps>;

export const Default: StoryFn<DataTableCarriersProps> = args => (
  <div className="w-full p-5">
    <DataTableCarriers {...args} />
  </div>
);
