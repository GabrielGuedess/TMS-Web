import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createOrderProcessingSchema } from './schema';

export type CreateOrderProcessingInputProps = z.input<
  typeof createOrderProcessingSchema
>;

export type CreateOrderProcessingOutputProps = z.output<
  typeof createOrderProcessingSchema
>;

export type CreateOrderProcessingProps = ComponentPropsWithoutRef<'div'>;
