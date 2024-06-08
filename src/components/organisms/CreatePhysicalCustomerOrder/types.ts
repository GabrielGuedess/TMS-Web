import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createPhysicalCustomerOrderSchema } from './schema';

export type CreatePhysicalCustomerOrderInputProps = z.input<
  typeof createPhysicalCustomerOrderSchema
>;

export type CreatePhysicalCustomerOrderOutputProps = z.output<
  typeof createPhysicalCustomerOrderSchema
>;

export type CreatePhysicalCustomerOrderProps = ComponentPropsWithoutRef<'div'>;
