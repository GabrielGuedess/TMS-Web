import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createVehicleTypeSchema } from './schema';

export type CreateVehicleTypeInputProps = z.input<
  typeof createVehicleTypeSchema
>;

export type CreateVehicleTypeOutputProps = z.output<
  typeof createVehicleTypeSchema
>;

export type CreateVehicleTypeProps = ComponentPropsWithoutRef<'div'>;
