import { type LegalClientOrderUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type LegalClientOrderProps = {
  id: string;
  order: string;
  pis_tax: number;
  icms_tax: number;
  carrier_id: string;
  cofins_tax: number;
  created_by: string;
  updated_by: string;
  calculate_icms: number;
  calculated_pis: number;
  quote_table_id: string;
  calculate_cofins: number;
  legal_contract_id: string;
  total_receivable?: null | number;
  total_tax_payable?: null | number;
  total_shipping_cost?: null | number;
  __typename?: 'LegalClientOrderModel';
  updated_at: Date;
  created_at: Date;
};

export type LegalClientOrderKeyProps = keyof LegalClientOrderProps;

export type EditRowProps = {
  oldData: LegalClientOrderProps[];
  newData?: OptionalWithIdProps<LegalClientOrderUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof LegalClientOrderProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof LegalClientOrderProps, ConditionProps>;

export type DataTableLegalClientOrdersProps = AgGridReactProps;
