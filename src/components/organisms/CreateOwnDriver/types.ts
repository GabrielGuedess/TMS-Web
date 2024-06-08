import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createOwnDriverSchema } from './schema';

export type CreateOwnDriverInputProps = z.input<typeof createOwnDriverSchema>;

export type CreateOwnDriverOutputProps = z.output<typeof createOwnDriverSchema>;

export type CreateOwnDriverProps = ComponentPropsWithoutRef<'div'>;
