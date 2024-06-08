import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createLegalClientOrderSchema } from './schema';

export type CreateLegalClientOrderInputProps = z.input<
  typeof createLegalClientOrderSchema
>;

export type CreateLegalClientOrderOutputProps = z.output<
  typeof createLegalClientOrderSchema
>;

export type CreateLegalClientOrderProps = ComponentPropsWithoutRef<'div'>;
