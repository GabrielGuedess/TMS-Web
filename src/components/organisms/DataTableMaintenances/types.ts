import { type MaintenanceUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type MaintenanceProps = {
  id: string;
  created_by: string;
  updated_by: string;
  vehicle_id: string;
  finished_at?: Date | null;
  maintenance_company_id: string;
  type_of_maintenance_id: string;
  __typename?: 'MaintenanceModel';
  updated_at: Date;
  created_at: Date;
};

export type MaintenanceKeyProps = keyof MaintenanceProps;

export type EditRowProps = {
  oldData: MaintenanceProps[];
  newData?: OptionalWithIdProps<MaintenanceUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof MaintenanceProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof MaintenanceProps, ConditionProps>;

export type DataTableMaintenancesProps = AgGridReactProps;
