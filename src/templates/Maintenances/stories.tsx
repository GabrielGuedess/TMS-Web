import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { Maintenances } from '.';

import { type MaintenancesProps } from './types';

export default {
  component: Maintenances,
  title: 'Templates/Maintenances',
} as Meta<MaintenancesProps>;

export const Default: StoryFn<MaintenancesProps> = args => (
  <Base>
    <Maintenances {...args} />
  </Base>
);
