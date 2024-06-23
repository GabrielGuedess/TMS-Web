import { type Meta, type StoryFn } from '@storybook/react';

import { PhysicalCustomerQuoteTableGeneral } from '.';

import { type PhysicalCustomerQuoteTableGeneralProps } from './types';

export default {
  args: {},
  component: PhysicalCustomerQuoteTableGeneral,
  title: 'Organisms/PhysicalCustomerQuoteTableGeneral',
} as Meta<PhysicalCustomerQuoteTableGeneralProps>;

export const Default: StoryFn<
  PhysicalCustomerQuoteTableGeneralProps
> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <PhysicalCustomerQuoteTableGeneral className="w-full" {...args} />
  </div>
);
