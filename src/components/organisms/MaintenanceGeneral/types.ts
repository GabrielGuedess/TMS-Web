import { type ComponentPropsWithoutRef } from 'react';

import { type GetMaintenanceQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type maintenanceGeneralSchema } from './schema';

export type MaintenanceGeneralInputProps = z.input<
  typeof maintenanceGeneralSchema
>;

export type MaintenanceGeneralOutputProps = z.output<
  typeof maintenanceGeneralSchema
>;

export type MaintenanceGeneralProps = {
  data: GetMaintenanceQuery;
} & ComponentPropsWithoutRef<'div'>;
