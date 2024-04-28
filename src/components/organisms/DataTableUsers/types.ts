import { type UsersQuery, type UserUpdateManyInput } from 'graphql/generated';

import { type AgGridReactProps } from 'ag-grid-react';

import { type OptionalWithIdProps } from 'helpers/OptionalWithIdProps';

export type UserProps = UsersQuery['users'][0];

export type UserKeyProps = keyof UsersQuery['users'][0];

export type EditRowProps = {
  oldData: UserProps[];
  newData?: OptionalWithIdProps<UserUpdateManyInput>[];
};

type ConditionProps = {
  dateTo: Date;
  type: string;
  filter: string;
  dateFrom: Date;
  filterType: string;
};

export type FilterProps = Record<
  keyof UserProps,
  {
    operator?: 'OR' | 'AND';
    condition1?: ConditionProps;
    condition2?: ConditionProps;
    conditions?: ConditionProps[];
  }
> &
  Record<keyof UserProps, ConditionProps>;

export type DataTableUsersProps = AgGridReactProps;
