import { type Meta, type StoryFn } from '@storybook/react';

import { CreatePhysicalCustomerOrder } from '.';

import { type CreatePhysicalCustomerOrderProps } from './types';

export default {
  args: {},
  component: CreatePhysicalCustomerOrder,
  title: 'Organisms/CreatePhysicalCustomerOrder',
} as Meta<CreatePhysicalCustomerOrderProps>;

export const Default: StoryFn<CreatePhysicalCustomerOrderProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <CreatePhysicalCustomerOrder className="w-full" {...args} />
  </div>
);
