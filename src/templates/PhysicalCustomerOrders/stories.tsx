import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { PhysicalCustomerOrders } from '.';

import { type PhysicalCustomerOrdersProps } from './types';

export default {
  component: PhysicalCustomerOrders,
  title: 'Templates/PhysicalCustomerOrders',
} as Meta<PhysicalCustomerOrdersProps>;

export const Default: StoryFn<PhysicalCustomerOrdersProps> = args => (
  <Base>
    <PhysicalCustomerOrders {...args} />
  </Base>
);
