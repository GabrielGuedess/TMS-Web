import { type Meta, type StoryFn } from '@storybook/react';

import { VehicleTypeGeneral } from '.';

import { type VehicleTypeGeneralProps } from './types';

export default {
  args: {},
  component: VehicleTypeGeneral,
  title: 'Organisms/VehicleTypeGeneral',
} as Meta<VehicleTypeGeneralProps>;

export const Default: StoryFn<VehicleTypeGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <VehicleTypeGeneral className="w-full" {...args} />
  </div>
);
