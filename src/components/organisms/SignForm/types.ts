import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type signInFormSchema } from './schema';

export type SignInFormSchemaProps = z.infer<typeof signInFormSchema>;

export type SignFormProps = ComponentPropsWithoutRef<'form'>;
