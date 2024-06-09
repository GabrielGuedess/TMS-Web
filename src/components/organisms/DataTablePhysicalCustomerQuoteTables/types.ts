import { type PhysicalCustomerQuoteTableUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type PhysicalCustomerQuoteTableProps = {
  id: string;
  mass: number;
  amount: number;
  volume: number;
  icms_id: string;
  codQuote: string;
  nf_serie: string;
  nf_value: number;
  senderId: string;
  who_pays: string;
  nf_number: string;
  created_by: string;
  updated_by: string;
  description: string;
  formPayment: string;
  kindService: string;
  recipientId: string;
  typeMerchandise: string;
  digital_signature: string;
  __typename?: 'PhysicalCustomerQuoteTableModel';
  updated_at: Date;
  created_at: Date;
};

export type PhysicalCustomerQuoteTableKeyProps =
  keyof PhysicalCustomerQuoteTableProps;

export type EditRowProps = {
  oldData: PhysicalCustomerQuoteTableProps[];
  newData?: OptionalWithIdProps<PhysicalCustomerQuoteTableUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof PhysicalCustomerQuoteTableProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof PhysicalCustomerQuoteTableProps, ConditionProps>;

export type DataTablePhysicalCustomerQuoteTablesProps = AgGridReactProps;
