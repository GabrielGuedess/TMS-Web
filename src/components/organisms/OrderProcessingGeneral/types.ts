import { type ComponentPropsWithoutRef } from 'react';

import { type GetOrderProcessingOneQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type orderProcessingGeneralSchema } from './schema';

export type OrderProcessingGeneralInputProps = z.input<
  typeof orderProcessingGeneralSchema
>;

export type OrderProcessingGeneralOutputProps = z.output<
  typeof orderProcessingGeneralSchema
>;

export type OrderProcessingGeneralProps = {
  data: GetOrderProcessingOneQuery;
} & ComponentPropsWithoutRef<'div'>;
