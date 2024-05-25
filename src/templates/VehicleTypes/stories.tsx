import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { VehicleTypes } from '.';

import { type VehicleTypesProps } from './types';

export default {
  component: VehicleTypes,
  title: 'Templates/VehicleTypes',
} as Meta<VehicleTypesProps>;

export const Default: StoryFn<VehicleTypesProps> = args => (
  <Base>
    <VehicleTypes {...args} />
  </Base>
);
