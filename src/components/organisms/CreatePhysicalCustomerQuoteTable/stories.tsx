import { type Meta, type StoryFn } from '@storybook/react';

import { CreatePhysicalCustomerQuoteTable } from '.';

import { type CreatePhysicalCustomerQuoteTableProps } from './types';

export default {
  args: {},
  component: CreatePhysicalCustomerQuoteTable,
  title: 'Organisms/CreatePhysicalCustomerQuoteTable',
} as Meta<CreatePhysicalCustomerQuoteTableProps>;

export const Default: StoryFn<CreatePhysicalCustomerQuoteTableProps> = args => (
  <div className="pdark:text-white-lilac-50 flex w-full justify-center p-5 text-comet-500">
    <CreatePhysicalCustomerQuoteTable className="w-full" {...args} />
  </div>
);
