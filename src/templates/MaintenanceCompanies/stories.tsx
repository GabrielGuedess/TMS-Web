import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { MaintenanceCompanies } from '.';

import { type MaintenanceCompaniesProps } from './types';

export default {
  component: MaintenanceCompanies,
  title: 'Templates/MaintenanceCompanies',
} as Meta<MaintenanceCompaniesProps>;

export const Default: StoryFn<MaintenanceCompaniesProps> = args => (
  <Base>
    <MaintenanceCompanies {...args} />
  </Base>
);
