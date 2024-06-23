import { type ComponentPropsWithoutRef } from 'react';

import { type GetPhysicalCustomerQuoteTableQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type physicalCustomerQuoteTableGeneralSchema } from './schema';

export type PhysicalCustomerQuoteTableGeneralInputProps = z.input<
  typeof physicalCustomerQuoteTableGeneralSchema
>;

export type PhysicalCustomerQuoteTableGeneralOutputProps = z.output<
  typeof physicalCustomerQuoteTableGeneralSchema
>;

export type PhysicalCustomerQuoteTableGeneralProps = {
  data: GetPhysicalCustomerQuoteTableQuery;
} & ComponentPropsWithoutRef<'div'>;
