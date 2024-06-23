import { type Meta, type StoryFn } from '@storybook/react';

import { CreateOrderProcessing } from '.';

import { type CreateOrderProcessingProps } from './types';

export default {
  args: {},
  component: CreateOrderProcessing,
  title: 'Organisms/CreateOrderProcessing',
} as Meta<CreateOrderProcessingProps>;

export const Default: StoryFn<CreateOrderProcessingProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreateOrderProcessing className="w-full" {...args} />
  </div>
);
