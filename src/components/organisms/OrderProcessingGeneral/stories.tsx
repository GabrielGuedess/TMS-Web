import { type Meta, type StoryFn } from '@storybook/react';

import { OrderProcessingGeneral } from '.';

import { type OrderProcessingGeneralProps } from './types';

export default {
  args: {},
  component: OrderProcessingGeneral,
  title: 'Organisms/OrderProcessingGeneral',
} as Meta<OrderProcessingGeneralProps>;

export const Default: StoryFn<OrderProcessingGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <OrderProcessingGeneral className="w-full" {...args} />
  </div>
);
