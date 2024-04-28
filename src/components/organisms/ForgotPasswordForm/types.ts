import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type forgotPasswordFormSchema } from './schema';

export type ForgotPasswordFormSchemaProps = z.infer<
  typeof forgotPasswordFormSchema
>;

export type ForgotPasswordFormProps = ComponentPropsWithoutRef<'form'>;
