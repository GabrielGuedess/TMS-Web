import { type LegalContractUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type LegalContractProps = {
  id: string;
  created_by: string;
  updated_by: string;
  effective_date: Date;
  observations: string;
  contract_number: string;
  legal_client_id: string;
  carrier_company_id: string;
  delivery_conditions: string;
  __typename?: 'LegalContractModel';
  updated_at: Date;
  created_at: Date;
};

export type LegalContractKeyProps = keyof LegalContractProps;

export type EditRowProps = {
  oldData: LegalContractProps[];
  newData?: OptionalWithIdProps<LegalContractUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof LegalContractProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof LegalContractProps, ConditionProps>;

export type DataTableLegalContractsProps = AgGridReactProps;
