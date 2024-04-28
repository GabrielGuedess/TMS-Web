import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createUserSchema } from './schema';

export type CreateUserInputProps = z.input<typeof createUserSchema>;

export type CreateUserOutputProps = z.output<typeof createUserSchema>;

export type CreateUserProps = ComponentPropsWithoutRef<'div'>;
