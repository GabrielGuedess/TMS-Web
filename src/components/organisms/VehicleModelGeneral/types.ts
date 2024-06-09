import { type ComponentPropsWithoutRef } from 'react';

import { type GetVehicleModelQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type vehicleModelGeneralSchema } from './schema';

export type VehicleModelGeneralInputProps = z.input<
  typeof vehicleModelGeneralSchema
>;

export type VehicleModelGeneralOutputProps = z.output<
  typeof vehicleModelGeneralSchema
>;

export type VehicleModelGeneralProps = {
  data: GetVehicleModelQuery;
} & ComponentPropsWithoutRef<'div'>;
