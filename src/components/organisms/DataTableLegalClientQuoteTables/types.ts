import { type LegalClientQuoteTableUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type LegalClientQuoteTableProps = {
  id: string;
  mass: number;
  amount: number;
  volume: number;
  codQuote: string;
  nf_value: number;
  senderId: string;
  who_pays: string;
  nf_serie: string;
  nf_number: string;
  created_by: string;
  updated_by: string;
  description: string;
  formPayment: string;
  kindService: string;
  recipientId: string;
  icms_id?: null | string;
  typeMerchandise: string;
  digital_signature: string;
  __typename?: 'LegalClientQuoteTableModel';
  updated_at: Date;
  created_at: Date;
};

export type LegalClientQuoteTableKeyProps = keyof LegalClientQuoteTableProps;

export type EditRowProps = {
  oldData: LegalClientQuoteTableProps[];
  newData?: OptionalWithIdProps<LegalClientQuoteTableUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof LegalClientQuoteTableProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof LegalClientQuoteTableProps, ConditionProps>;

export type DataTableLegalClientQuoteTablesProps = AgGridReactProps;
