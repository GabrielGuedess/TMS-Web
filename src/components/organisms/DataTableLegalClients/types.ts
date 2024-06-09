import { type LegalClientUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type LegalClientProps = {
  id: string;
  branch: string;
  created_by: string;
  updated_by: string;
  legal_person_id: string;
  __typename?: 'LegalClientModel';
  LegalPerson: {
    id: string;
    cnpj: string;
    fantasy_name: string;
    __typename?: 'LegalPersonModel';
  };
  updated_at: Date;
  created_at: Date;
};

export type LegalClientKeyProps = keyof LegalClientProps;

export type EditRowProps = {
  oldData: LegalClientProps[];
  newData?: OptionalWithIdProps<LegalClientUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof LegalClientProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof LegalClientProps, ConditionProps>;

export type DataTableLegalClientsProps = AgGridReactProps;
