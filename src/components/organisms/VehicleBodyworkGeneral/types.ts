import { type ComponentPropsWithoutRef } from 'react';

import { type GetVehicleBodyworkModelQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type vehicleBodyworkGeneralSchema } from './schema';

export type VehicleBodyworkGeneralInputProps = z.input<
  typeof vehicleBodyworkGeneralSchema
>;

export type VehicleBodyworkGeneralOutputProps = z.output<
  typeof vehicleBodyworkGeneralSchema
>;

export type VehicleBodyworkGeneralProps = {
  data: GetVehicleBodyworkModelQuery;
} & ComponentPropsWithoutRef<'div'>;
