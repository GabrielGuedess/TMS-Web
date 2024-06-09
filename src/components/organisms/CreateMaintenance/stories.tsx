import { type Meta, type StoryFn } from '@storybook/react';

import { CreateMaintenance } from '.';

import { type CreateMaintenanceProps } from './types';

export default {
  args: {},
  component: CreateMaintenance,
  title: 'Organisms/CreateMaintenance',
} as Meta<CreateMaintenanceProps>;

export const Default: StoryFn<CreateMaintenanceProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateMaintenance className="w-full" {...args} />
  </div>
);
