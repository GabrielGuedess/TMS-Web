import { type PhysicalCustomerOrderUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type PhysicalCustomerOrderProps = {
  id: string;
  order: string;
  carrier_id: string;
  created_by: string;
  updated_by: string;
  quote_table_id: string;
  physicalCustomerId: string;
  total_receivable?: null | number;
  total_tax_payable?: null | number;
  total_shipping_cost?: null | number;
  __typename?: 'PhysicalCustomerOrderModel';
  updated_at: Date;
  created_at: Date;
};

export type PhysicalCustomerOrderKeyProps = keyof PhysicalCustomerOrderProps;

export type EditRowProps = {
  oldData: PhysicalCustomerOrderProps[];
  newData?: OptionalWithIdProps<PhysicalCustomerOrderUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof PhysicalCustomerOrderProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof PhysicalCustomerOrderProps, ConditionProps>;

export type DataTablePhysicalCustomerOrdersProps = AgGridReactProps;
