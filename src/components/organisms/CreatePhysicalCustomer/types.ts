import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createPhysicalCustomerSchema } from './schema';

export type CreatePhysicalCustomerInputProps = z.input<
  typeof createPhysicalCustomerSchema
>;

export type CreatePhysicalCustomerOutputProps = z.output<
  typeof createPhysicalCustomerSchema
>;

export type CreatePhysicalCustomerProps = ComponentPropsWithoutRef<'div'>;
