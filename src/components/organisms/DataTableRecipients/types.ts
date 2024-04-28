import { type RecipientUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type RecipientProps = {
  id: string;
  created_by: string;
  updated_by: string;
  __typename?: 'RecipientModel';
  legal_person_id?: null | string;
  natural_person_id?: null | string;
};

export type RecipientKeyProps = keyof RecipientProps;

export type EditRowProps = {
  oldData: RecipientProps[];
  newData?: OptionalWithIdProps<RecipientUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof RecipientProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof RecipientProps, ConditionProps>;

export type DataTableRecipientsProps = AgGridReactProps;
