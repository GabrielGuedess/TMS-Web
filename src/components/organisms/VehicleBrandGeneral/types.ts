import { type ComponentPropsWithoutRef } from 'react';

import { type GetVehicleBrandQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type vehicleBrandGeneralSchema } from './schema';

export type VehicleBrandGeneralInputProps = z.input<
  typeof vehicleBrandGeneralSchema
>;

export type VehicleBrandGeneralOutputProps = z.output<
  typeof vehicleBrandGeneralSchema
>;

export type VehicleBrandGeneralProps = {
  data: GetVehicleBrandQuery;
} & ComponentPropsWithoutRef<'div'>;
