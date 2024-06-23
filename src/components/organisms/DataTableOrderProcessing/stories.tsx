import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableOrderProcessing } from '.';

import { type DataTableOrderProcessingProps } from './types';

export default {
  args: {},
  component: DataTableOrderProcessing,
  title: 'Organisms/DataTableOrderProcessing',
} as Meta<DataTableOrderProcessingProps>;

export const Default: StoryFn<DataTableOrderProcessingProps> = args => (
  <div className="w-full p-5">
    <DataTableOrderProcessing {...args} />
  </div>
);
