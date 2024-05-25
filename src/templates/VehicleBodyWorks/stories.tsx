import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { VehicleBodyWorks } from '.';

import { type VehicleBodyWorksProps } from './types';

export default {
  component: VehicleBodyWorks,
  title: 'Templates/VehicleBodyWorks',
} as Meta<VehicleBodyWorksProps>;

export const Default: StoryFn<VehicleBodyWorksProps> = args => (
  <Base>
    <VehicleBodyWorks {...args} />
  </Base>
);
