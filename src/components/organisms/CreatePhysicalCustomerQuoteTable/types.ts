import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createPhysicalCustomerQuoteTableSchema } from './schema';

export type CreatePhysicalCustomerQuoteTableInputProps = z.input<
  typeof createPhysicalCustomerQuoteTableSchema
>;

export type CreatePhysicalCustomerQuoteTableOutputProps = z.output<
  typeof createPhysicalCustomerQuoteTableSchema
>;

export type CreatePhysicalCustomerQuoteTableProps =
  ComponentPropsWithoutRef<'div'>;
