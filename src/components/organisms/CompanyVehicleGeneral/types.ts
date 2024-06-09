import { type ComponentPropsWithoutRef } from 'react';

import { type GetCompanyVehicleQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type companyVehicleGeneralSchema } from './schema';

export type CompanyVehicleGeneralInputProps = z.input<
  typeof companyVehicleGeneralSchema
>;

export type CompanyVehicleGeneralOutputProps = z.output<
  typeof companyVehicleGeneralSchema
>;

export type CompanyVehicleGeneralProps = {
  data: GetCompanyVehicleQuery;
} & ComponentPropsWithoutRef<'div'>;
