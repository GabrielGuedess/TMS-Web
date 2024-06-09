import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createMaintenanceCompanySchema } from './schema';

export type CreateMaintenanceCompanyInputProps = z.input<
  typeof createMaintenanceCompanySchema
>;

export type CreateMaintenanceCompanyOutputProps = z.output<
  typeof createMaintenanceCompanySchema
>;

export type CreateMaintenanceCompanyProps = ComponentPropsWithoutRef<'div'>;
