import { type PhysicalCustomerUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type PhysicalCustomerProps = {
  id: string;
  created_by: string;
  updated_by: string;
  branch?: null | string;
  natural_person_id: string;
  __typename?: 'PhysicalCustomerModel';
  updated_at: Date;
  created_at: Date;
};

export type PhysicalCustomerKeyProps = keyof PhysicalCustomerProps;

export type EditRowProps = {
  oldData: PhysicalCustomerProps[];
  newData?: OptionalWithIdProps<PhysicalCustomerUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof PhysicalCustomerProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof PhysicalCustomerProps, ConditionProps>;

export type DataTablePhysicalCustomersProps = AgGridReactProps;
