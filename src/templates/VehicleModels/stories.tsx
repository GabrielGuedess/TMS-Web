import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { VehicleModels } from '.';

import { type VehicleModelsProps } from './types';

export default {
  component: VehicleModels,
  title: 'Templates/VehicleModels',
} as Meta<VehicleModelsProps>;

export const Default: StoryFn<VehicleModelsProps> = args => (
  <Base>
    <VehicleModels {...args} />
  </Base>
);
