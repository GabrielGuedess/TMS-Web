import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createExpenseSchema } from './schema';

export type CreateExpenseInputProps = z.input<typeof createExpenseSchema>;

export type CreateExpenseOutputProps = z.output<typeof createExpenseSchema>;

export type CreateExpenseProps = ComponentPropsWithoutRef<'div'>;
