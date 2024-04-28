import { type SenderUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type SenderProps = {
  id: string;
  created_by: string;
  updated_by: string;
  __typename?: 'SenderModel';
  legal_person_id?: null | string;
  natural_person_id?: null | string;
};

export type SenderKeyProps = keyof SenderProps;

export type EditRowProps = {
  oldData: SenderProps[];
  newData?: OptionalWithIdProps<SenderUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof SenderProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof SenderProps, ConditionProps>;

export type DataTableSendersProps = AgGridReactProps;
