import { type ComponentPropsWithoutRef } from 'react';

import { type GetPhysicalCustomerOrderModelQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type physicalCustomerOrderGeneralSchema } from './schema';

export type PhysicalCustomerOrderGeneralInputProps = z.input<
  typeof physicalCustomerOrderGeneralSchema
>;

export type PhysicalCustomerOrderGeneralOutputProps = z.output<
  typeof physicalCustomerOrderGeneralSchema
>;

export type PhysicalCustomerOrderGeneralProps = {
  data: GetPhysicalCustomerOrderModelQuery;
} & ComponentPropsWithoutRef<'div'>;
