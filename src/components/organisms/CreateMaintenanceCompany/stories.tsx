import { type Meta, type StoryFn } from '@storybook/react';

import { CreateMaintenanceCompany } from '.';

import { type CreateMaintenanceCompanyProps } from './types';

export default {
  args: {},
  component: CreateMaintenanceCompany,
  title: 'Organisms/CreateMaintenanceCompany',
} as Meta<CreateMaintenanceCompanyProps>;

export const Default: StoryFn<CreateMaintenanceCompanyProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateMaintenanceCompany className="w-full" {...args} />
  </div>
);
