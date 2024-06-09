import { type Meta, type StoryFn } from '@storybook/react';

import { CreateVehicleModel } from '.';

import { type CreateVehicleModelProps } from './types';

export default {
  args: {},
  component: CreateVehicleModel,
  title: 'Organisms/CreateVehicleModel',
} as Meta<CreateVehicleModelProps>;

export const Default: StoryFn<CreateVehicleModelProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateVehicleModel className="w-full" {...args} />
  </div>
);
