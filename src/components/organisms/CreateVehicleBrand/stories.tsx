import { type Meta, type StoryFn } from '@storybook/react';

import { CreateVehicleBrand } from '.';

import { type CreateVehicleBrandProps } from './types';

export default {
  args: {},
  component: CreateVehicleBrand,
  title: 'Organisms/CreateVehicleBrand',
} as Meta<CreateVehicleBrandProps>;

export const Default: StoryFn<CreateVehicleBrandProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateVehicleBrand className="w-full" {...args} />
  </div>
);
