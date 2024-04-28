import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableSenders } from '.';

import { type DataTableSendersProps } from './types';

export default {
  args: {},
  component: DataTableSenders,
  title: 'Organisms/DataTableSenders',
} as Meta<DataTableSendersProps>;

export const Default: StoryFn<DataTableSendersProps> = args => (
  <div className="w-full p-5">
    <DataTableSenders {...args} />
  </div>
);
