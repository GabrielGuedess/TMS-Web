import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createCompanyVehicleSchema } from './schema';

export type CreateCompanyVehicleInputProps = z.input<
  typeof createCompanyVehicleSchema
>;

export type CreateCompanyVehicleOutputProps = z.output<
  typeof createCompanyVehicleSchema
>;

export type CreateCompanyVehicleProps = ComponentPropsWithoutRef<'div'>;
