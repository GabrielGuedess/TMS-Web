import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { PhysicalCustomerQuoteTables } from '.';

import { type PhysicalCustomerQuoteTablesProps } from './types';

export default {
  component: PhysicalCustomerQuoteTables,
  title: 'Templates/PhysicalCustomerQuoteTables',
} as Meta<PhysicalCustomerQuoteTablesProps>;

export const Default: StoryFn<PhysicalCustomerQuoteTablesProps> = args => (
  <Base>
    <PhysicalCustomerQuoteTables {...args} />
  </Base>
);
