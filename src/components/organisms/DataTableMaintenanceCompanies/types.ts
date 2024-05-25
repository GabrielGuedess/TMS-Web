import { type MaintenanceCompanyUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type MaintenanceCompanyProps = {
  id: string;
  created_by: string;
  updated_by: string;
  legal_person_id: string;
  specialty_maintenance?: null | string;
  __typename?: 'MaintenanceCompanyModel';
  updated_at: Date;
  created_at: Date;
};

export type MaintenanceCompanyKeyProps = keyof MaintenanceCompanyProps;

export type EditRowProps = {
  oldData: MaintenanceCompanyProps[];
  newData?: OptionalWithIdProps<MaintenanceCompanyUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof MaintenanceCompanyProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof MaintenanceCompanyProps, ConditionProps>;

export type DataTableMaintenanceCompaniesProps = AgGridReactProps;
