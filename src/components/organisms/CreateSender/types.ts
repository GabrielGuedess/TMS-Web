import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createSenderSchema } from './schema';

export type CreateSenderInputProps = z.input<typeof createSenderSchema>;

export type CreateSenderOutputProps = z.output<typeof createSenderSchema>;

export type CreateSenderProps = ComponentPropsWithoutRef<'div'>;
