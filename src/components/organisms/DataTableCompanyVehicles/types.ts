import { type CompanyVehicleUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type CompanyVehicleProps = {
  id: string;
  created_by: string;
  updated_by: string;
  vehicle_id: string;
  carrier_company_id: string;
  __typename?: 'CompanyVehicleIModel';
  updated_at: Date;
  created_at: Date;
};

export type CompanyVehicleKeyProps = keyof CompanyVehicleProps;

export type EditRowProps = {
  oldData: CompanyVehicleProps[];
  newData?: OptionalWithIdProps<CompanyVehicleUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterBrand: string;
};

export type FilterProps = Record<
  keyof CompanyVehicleProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof CompanyVehicleProps, ConditionProps>;

export type DataTableCompanyVehiclesProps = AgGridReactProps;
