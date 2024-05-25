import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { VehicleBrands } from '.';

import { type VehicleBrandsProps } from './types';

export default {
  component: VehicleBrands,
  title: 'Templates/VehicleBrands',
} as Meta<VehicleBrandsProps>;

export const Default: StoryFn<VehicleBrandsProps> = args => (
  <Base>
    <VehicleBrands {...args} />
  </Base>
);
