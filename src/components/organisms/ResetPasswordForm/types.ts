import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type resetPasswordFormSchema } from './schema';

export type ResetPasswordFormSchemaProps = z.infer<
  typeof resetPasswordFormSchema
>;

export type ResetPasswordFormProps = {
  email?: string;
} & ComponentPropsWithoutRef<'form'>;
