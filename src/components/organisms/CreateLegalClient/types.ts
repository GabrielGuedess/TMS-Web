import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createLegalClientSchema } from './schema';

export type CreateLegalClientInputProps = z.input<
  typeof createLegalClientSchema
>;

export type CreateLegalClientOutputProps = z.output<
  typeof createLegalClientSchema
>;

export type CreateLegalClientProps = ComponentPropsWithoutRef<'div'>;
