import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { OrderProcessing } from '.';

import { type OrderProcessingProps } from './types';

export default {
  component: OrderProcessing,
  title: 'Templates/OrderProcessing',
} as Meta<OrderProcessingProps>;

export const Default: StoryFn<OrderProcessingProps> = args => (
  <Base>
    <OrderProcessing {...args} />
  </Base>
);
