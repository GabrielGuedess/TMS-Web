import { type Meta, type StoryFn } from '@storybook/react';

import { CreateCompanyVehicle } from '.';

import { type CreateCompanyVehicleProps } from './types';

export default {
  args: {},
  component: CreateCompanyVehicle,
  title: 'Organisms/CreateCompanyVehicle',
} as Meta<CreateCompanyVehicleProps>;

export const Default: StoryFn<CreateCompanyVehicleProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateCompanyVehicle className="w-full" {...args} />
  </div>
);
