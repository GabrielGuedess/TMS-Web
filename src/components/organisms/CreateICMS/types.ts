import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createICMSSchema } from './schema';

export type CreateICMSInputProps = z.input<typeof createICMSSchema>;

export type CreateICMSOutputProps = z.output<typeof createICMSSchema>;

export type CreateICMSProps = ComponentPropsWithoutRef<'div'>;
