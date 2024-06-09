import { type Meta, type StoryFn } from '@storybook/react';

import { VehicleModelGeneral } from '.';

import { type VehicleModelGeneralProps } from './types';

export default {
  args: {},
  component: VehicleModelGeneral,
  title: 'Organisms/VehicleModelGeneral',
} as Meta<VehicleModelGeneralProps>;

export const Default: StoryFn<VehicleModelGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <VehicleModelGeneral className="w-full" {...args} />
  </div>
);
