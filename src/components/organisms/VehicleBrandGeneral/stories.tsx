import { type Meta, type StoryFn } from '@storybook/react';

import { VehicleBrandGeneral } from '.';

import { type VehicleBrandGeneralProps } from './types';

export default {
  args: {},
  component: VehicleBrandGeneral,
  title: 'Organisms/VehicleBrandGeneral',
} as Meta<VehicleBrandGeneralProps>;

export const Default: StoryFn<VehicleBrandGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <VehicleBrandGeneral className="w-full" {...args} />
  </div>
);
