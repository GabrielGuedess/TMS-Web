import { type ComponentPropsWithoutRef } from 'react';

import { type GetPhysicalCustomerQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type physicalCustomerGeneralSchema } from './schema';

export type PhysicalCustomerGeneralInputProps = z.input<
  typeof physicalCustomerGeneralSchema
>;

export type PhysicalCustomerGeneralOutputProps = z.output<
  typeof physicalCustomerGeneralSchema
>;

export type PhysicalCustomerGeneralProps = {
  data: GetPhysicalCustomerQuery;
} & ComponentPropsWithoutRef<'div'>;
