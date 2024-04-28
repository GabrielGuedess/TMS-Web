import { type OwnDriverUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type OwnDriverProps = {
  id: string;
  cnh: string;
  created_by: string;
  updated_by: string;
  cnh_expiration: Date;
  cnh_category: string;
  course_mopp: boolean;
  company_vehicle: boolean;
  natural_person_id: string;
  __typename?: 'OwnDriverModel';
  updated_at: Date;
  created_at: Date;
};

export type OwnDriverKeyProps = keyof OwnDriverProps;

export type EditRowProps = {
  oldData: OwnDriverProps[];
  newData?: OptionalWithIdProps<OwnDriverUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof OwnDriverProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof OwnDriverProps, ConditionProps>;

export type DataTableOwnDriversProps = AgGridReactProps;
