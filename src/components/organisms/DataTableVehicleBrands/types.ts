import { type VehicleBrandUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type VehicleBrandProps = {
  id: string;
  name: string;
  created_by: string;
  updated_by: string;
  __typename?: 'VehicleBrandModel';
  updated_at: Date;
  created_at: Date;
};

export type VehicleBrandKeyProps = keyof VehicleBrandProps;

export type EditRowProps = {
  oldData: VehicleBrandProps[];
  newData?: OptionalWithIdProps<VehicleBrandUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterBrand: string;
};

export type FilterProps = Record<
  keyof VehicleBrandProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof VehicleBrandProps, ConditionProps>;

export type DataTableVehicleBrandsProps = AgGridReactProps;
