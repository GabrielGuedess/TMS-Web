import { type FreightExpenseUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type ExpenseProps = {
  id: string;
  value: number;
  expenseName: string;
  __typename?: 'FreightExpenseModel';
  legalClientOrderId?: null | string;
  physicalCustomerOrderId?: null | string;
};

export type ExpenseKeyProps = keyof ExpenseProps;

export type EditRowProps = {
  oldData: ExpenseProps[];
  newData?: OptionalWithIdProps<FreightExpenseUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof ExpenseProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof ExpenseProps, ConditionProps>;

export type DataTableExpensesProps = AgGridReactProps;
