import { type CarrierCompanyUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type CarrierProps = {
  id: string;
  rntrc: string;
  created_by: string;
  updated_by: string;
  legalPersonId: string;
  __typename?: 'CarrierCompanyModel';
  updated_at: Date;
  created_at: Date;
};

export type CarrierKeyProps = keyof CarrierProps;

export type EditRowProps = {
  oldData: CarrierProps[];
  newData?: OptionalWithIdProps<CarrierCompanyUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof CarrierProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof CarrierProps, ConditionProps>;

export type DataTableCarriersProps = AgGridReactProps;
