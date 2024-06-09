import { type Meta, type StoryFn } from '@storybook/react';

import { CreateVehicleType } from '.';

import { type CreateVehicleTypeProps } from './types';

export default {
  args: {},
  component: CreateVehicleType,
  title: 'Organisms/CreateVehicleType',
} as Meta<CreateVehicleTypeProps>;

export const Default: StoryFn<CreateVehicleTypeProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateVehicleType className="w-full" {...args} />
  </div>
);
