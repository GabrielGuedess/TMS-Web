import { type VehicleModelUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type VehicleModelProps = {
  id: string;
  name: string;
  axles: number;
  weight: number;
  type_id: string;
  brand_id: string;
  created_by: string;
  updated_by: string;
  capacity_max: number;
  capacity_per_axle: number;
  __typename?: 'VehicleModelGraphql';
  updated_at: Date;
  created_at: Date;
};

export type VehicleModelKeyProps = keyof VehicleModelProps;

export type EditRowProps = {
  oldData: VehicleModelProps[];
  newData?: OptionalWithIdProps<VehicleModelUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterModel: string;
};

export type FilterProps = Record<
  keyof VehicleModelProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof VehicleModelProps, ConditionProps>;

export type DataTableVehicleModelsProps = AgGridReactProps;
