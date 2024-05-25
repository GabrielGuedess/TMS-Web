import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableICMS } from '.';

import { type DataTableICMSProps } from './types';

export default {
  args: {},
  component: DataTableICMS,
  title: 'Organisms/DataTableICMS',
} as Meta<DataTableICMSProps>;

export const Default: StoryFn<DataTableICMSProps> = args => (
  <div className="w-full p-5">
    <DataTableICMS {...args} />
  </div>
);
