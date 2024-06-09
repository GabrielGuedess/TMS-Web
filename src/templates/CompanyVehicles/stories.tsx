import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { CompanyVehicles } from '.';

import { type CompanyVehiclesProps } from './types';

export default {
  component: CompanyVehicles,
  title: 'Templates/CompanyVehicles',
} as Meta<CompanyVehiclesProps>;

export const Default: StoryFn<CompanyVehiclesProps> = args => (
  <Base>
    <CompanyVehicles {...args} />
  </Base>
);
