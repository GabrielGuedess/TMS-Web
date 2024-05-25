import { type IcmsUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type ICMSProps = {
  id: string;
  aliquot: number;
  created_by: string;
  updated_by: string;
  effective_date: Date;
  state_origin: string;
  recipient_state: string;
  __typename?: 'IcmsModel';
};

export type ICMSKeyProps = keyof ICMSProps;

export type EditRowProps = {
  oldData: ICMSProps[];
  newData?: OptionalWithIdProps<IcmsUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof ICMSProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof ICMSProps, ConditionProps>;

export type DataTableICMSProps = AgGridReactProps;
