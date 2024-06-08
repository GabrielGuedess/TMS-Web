import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createRecipientSchema } from './schema';

export type CreateRecipientInputProps = z.input<typeof createRecipientSchema>;

export type CreateRecipientOutputProps = z.output<typeof createRecipientSchema>;

export type CreateRecipientProps = ComponentPropsWithoutRef<'div'>;
