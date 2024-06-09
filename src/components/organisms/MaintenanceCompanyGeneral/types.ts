import { type ComponentPropsWithoutRef } from 'react';

import { type GetMaintenanceCompanyModelQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type maintenanceCompanyGeneralSchema } from './schema';

export type MaintenanceCompanyGeneralInputProps = z.input<
  typeof maintenanceCompanyGeneralSchema
>;

export type MaintenanceCompanyGeneralOutputProps = z.output<
  typeof maintenanceCompanyGeneralSchema
>;

export type MaintenanceCompanyGeneralProps = {
  data: GetMaintenanceCompanyModelQuery;
} & ComponentPropsWithoutRef<'div'>;
