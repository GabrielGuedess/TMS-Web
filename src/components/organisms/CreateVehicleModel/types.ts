import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createVehicleModelSchema } from './schema';

export type CreateVehicleModelInputProps = z.input<
  typeof createVehicleModelSchema
>;

export type CreateVehicleModelOutputProps = z.output<
  typeof createVehicleModelSchema
>;

export type CreateVehicleModelProps = ComponentPropsWithoutRef<'div'>;
