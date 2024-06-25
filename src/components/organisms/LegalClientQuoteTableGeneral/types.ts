import { type ComponentPropsWithoutRef } from 'react';

import { type GetLegalClientQuoteTableQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type overviewLegalClientQuoteTableSchema } from './schema';

export type OverviewLegalClientQuoteTableInputProps = z.input<
  typeof overviewLegalClientQuoteTableSchema
>;

export type OverviewLegalClientQuoteTableOutputProps = z.output<
  typeof overviewLegalClientQuoteTableSchema
>;

export type OverviewLegalClientQuoteTableProps = {
  data: GetLegalClientQuoteTableQuery;
} & ComponentPropsWithoutRef<'div'>;
