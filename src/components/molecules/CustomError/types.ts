import { type ComponentPropsWithoutRef } from 'react';

import { type ICellRendererParams } from 'ag-grid-community';

import { type OptionalProps } from 'helpers/OptionalProps';

export type CustomErrorProps = {
  noRowsMessageFunc: () => string;
} & ComponentPropsWithoutRef<'div'> &
  OptionalProps<ICellRendererParams>;
