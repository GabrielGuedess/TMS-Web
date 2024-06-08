import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createLegalClientQuoteTableSchema } from './schema';

export type CreateLegalClientQuoteTableInputProps = z.input<
  typeof createLegalClientQuoteTableSchema
>;

export type CreateLegalClientQuoteTableOutputProps = z.output<
  typeof createLegalClientQuoteTableSchema
>;

export type CreateLegalClientQuoteTableProps = ComponentPropsWithoutRef<'div'>;
