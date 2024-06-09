import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createMaintenanceSchema } from './schema';

export type CreateMaintenanceInputProps = z.input<
  typeof createMaintenanceSchema
>;

export type CreateMaintenanceOutputProps = z.output<
  typeof createMaintenanceSchema
>;

export type CreateMaintenanceProps = ComponentPropsWithoutRef<'div'>;
