import { type ComponentPropsWithoutRef } from 'react';

import { type GetCarrierCompanyModelQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type carrierGeneralSchema } from './schema';

export type CarrierGeneralInputProps = z.input<typeof carrierGeneralSchema>;

export type CarrierGeneralOutputProps = z.output<typeof carrierGeneralSchema>;

export type CarrierGeneralProps = {
  data: GetCarrierCompanyModelQuery;
} & ComponentPropsWithoutRef<'div'>;
