import { type Meta, type StoryFn } from '@storybook/react';

import { CreateVehicleBodywork } from '.';

import { type CreateVehicleBodyworkProps } from './types';

export default {
  args: {},
  component: CreateVehicleBodywork,
  title: 'Organisms/CreateVehicleBodywork',
} as Meta<CreateVehicleBodyworkProps>;

export const Default: StoryFn<CreateVehicleBodyworkProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateVehicleBodywork className="w-full" {...args} />
  </div>
);
