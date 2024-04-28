import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { PhysicalCustomers } from '.';

import { type PhysicalCustomersProps } from './types';

export default {
  component: PhysicalCustomers,
  title: 'Templates/PhysicalCustomers',
} as Meta<PhysicalCustomersProps>;

export const Default: StoryFn<PhysicalCustomersProps> = args => (
  <Base>
    <PhysicalCustomers {...args} />
  </Base>
);
