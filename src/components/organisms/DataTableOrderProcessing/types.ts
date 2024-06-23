import {
  type StatusOrder,
  type OrderProcessingUpdateManyInput,
} from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type OrderProcessingProps = {
  id: string;
  start_at: Date;
  driver_id: string;
  created_by: string;
  updated_by: string;
  vehicle_id: string;
  status: StatusOrder;
  end_at?: Date | null;
  total_distance: number;
  total_spend_liters: number;
  total_spending_money: number;
  order_processing_number: string;
  __typename?: 'OrderProcessingModel';
  updated_at: Date;
  created_at: Date;
};

export type OrderProcessingKeyProps = keyof OrderProcessingProps;

export type EditRowProps = {
  oldData: OrderProcessingProps[];
  newData?: OptionalWithIdProps<OrderProcessingUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof OrderProcessingProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof OrderProcessingProps, ConditionProps>;

export type DataTableOrderProcessingProps = AgGridReactProps;
