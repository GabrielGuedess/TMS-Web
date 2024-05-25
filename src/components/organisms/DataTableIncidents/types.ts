import { type IncidentUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type IncidentProps = {
  id: string;
  created_by: string;
  updated_by: string;
  date_incident: Date;
  description: string;
  order_process_id: string;
  date_resolved?: Date | null;
  __typename?: 'IncidentModel';
  updated_at: Date;
  created_at: Date;
};

export type IncidentKeyProps = keyof IncidentProps;

export type EditRowProps = {
  oldData: IncidentProps[];
  newData?: OptionalWithIdProps<IncidentUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof IncidentProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof IncidentProps, ConditionProps>;

export type DataTableIncidentsProps = AgGridReactProps;
