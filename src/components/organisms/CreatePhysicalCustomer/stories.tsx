import { type Meta, type StoryFn } from '@storybook/react';

import { CreatePhysicalCustomer } from '.';

import { type CreatePhysicalCustomerProps } from './types';

export default {
  args: {},
  component: CreatePhysicalCustomer,
  title: 'Organisms/CreatePhysicalCustomer',
} as Meta<CreatePhysicalCustomerProps>;

export const Default: StoryFn<CreatePhysicalCustomerProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreatePhysicalCustomer className="w-full" {...args} />
  </div>
);
