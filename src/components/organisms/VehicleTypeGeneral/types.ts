import { type ComponentPropsWithoutRef } from 'react';

import { type GetVehicleTypeQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type vehicleTypeGeneralSchema } from './schema';

export type VehicleTypeGeneralInputProps = z.input<
  typeof vehicleTypeGeneralSchema
>;

export type VehicleTypeGeneralOutputProps = z.output<
  typeof vehicleTypeGeneralSchema
>;

export type VehicleTypeGeneralProps = {
  data: GetVehicleTypeQuery;
} & ComponentPropsWithoutRef<'div'>;
