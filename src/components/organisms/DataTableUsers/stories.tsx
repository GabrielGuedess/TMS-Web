import { type Meta, type StoryFn } from '@storybook/react';

import { DataTableUsers } from '.';

import { type DataTableUsersProps } from './types';

export default {
  args: {},
  component: DataTableUsers,
  title: 'Organisms/DataTableUsers',
} as Meta<DataTableUsersProps>;

export const Default: StoryFn<DataTableUsersProps> = args => (
  <div className="w-full p-5">
    <DataTableUsers {...args} />
  </div>
);
