import { type VehicleTypeUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type VehicleTypeProps = {
  id: string;
  name: string;
  bodyWork: boolean;
  created_by: string;
  updated_by: string;
  __typename?: 'VehicleTypeModel';
  updated_at: Date;
  created_at: Date;
};

export type VehicleTypeKeyProps = keyof VehicleTypeProps;

export type EditRowProps = {
  oldData: VehicleTypeProps[];
  newData?: OptionalWithIdProps<VehicleTypeUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof VehicleTypeProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof VehicleTypeProps, ConditionProps>;

export type DataTableVehicleTypesProps = AgGridReactProps;
