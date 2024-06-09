import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createVehicleBodyworkSchema } from './schema';

export type CreateVehicleBodyworkInputProps = z.input<
  typeof createVehicleBodyworkSchema
>;

export type CreateVehicleBodyworkOutputProps = z.output<
  typeof createVehicleBodyworkSchema
>;

export type CreateVehicleBodyworkProps = ComponentPropsWithoutRef<'div'>;
