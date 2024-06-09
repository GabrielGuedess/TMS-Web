import { type Meta, type StoryFn } from '@storybook/react';

import { VehicleBodyworkGeneral } from '.';

import { type VehicleBodyworkGeneralProps } from './types';

export default {
  args: {},
  component: VehicleBodyworkGeneral,
  title: 'Organisms/VehicleBodyworkGeneral',
} as Meta<VehicleBodyworkGeneralProps>;

export const Default: StoryFn<VehicleBodyworkGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <VehicleBodyworkGeneral className="w-full" {...args} />
  </div>
);
