import { type VehicleBodyworkUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type VehicleBodyWorkProps = {
  id: string;
  mass: number;
  name: string;
  axles: number;
  volume: number;
  created_by: string;
  updated_by: string;
  __typename?: 'VehicleBodyworkModel';
  updated_at: Date;
  created_at: Date;
};

export type VehicleBodyWorkKeyProps = keyof VehicleBodyWorkProps;

export type EditRowProps = {
  oldData: VehicleBodyWorkProps[];
  newData?: OptionalWithIdProps<VehicleBodyworkUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterBodyWork: string;
};

export type FilterProps = Record<
  keyof VehicleBodyWorkProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof VehicleBodyWorkProps, ConditionProps>;

export type DataTableVehicleBodyWorksProps = AgGridReactProps;
