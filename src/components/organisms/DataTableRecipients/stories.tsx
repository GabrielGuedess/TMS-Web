import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableRecipients } from '.';

import { type DataTableRecipientsProps } from './types';

export default {
  args: {},
  component: DataTableRecipients,
  title: 'Organisms/DataTableRecipients',
} as Meta<DataTableRecipientsProps>;

export const Default: StoryFn<DataTableRecipientsProps> = args => (
  <div className="w-full p-5">
    <DataTableRecipients {...args} />
  </div>
);
