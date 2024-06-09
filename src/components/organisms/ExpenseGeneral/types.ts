import { type ComponentPropsWithoutRef } from 'react';

import { type GetFreightExpenseQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type expenseGeneralSchema } from './schema';

export type ExpenseGeneralInputProps = z.input<typeof expenseGeneralSchema>;

export type ExpenseGeneralOutputProps = z.output<typeof expenseGeneralSchema>;

export type ExpenseGeneralProps = {
  data: GetFreightExpenseQuery;
} & ComponentPropsWithoutRef<'div'>;
