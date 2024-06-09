import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createVehicleBrandSchema } from './schema';

export type CreateVehicleBrandInputProps = z.input<
  typeof createVehicleBrandSchema
>;

export type CreateVehicleBrandOutputProps = z.output<
  typeof createVehicleBrandSchema
>;

export type CreateVehicleBrandProps = ComponentPropsWithoutRef<'div'>;
