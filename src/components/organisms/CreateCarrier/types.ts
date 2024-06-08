import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createCarrierSchema } from './schema';

export type CreateCarrierInputProps = z.input<typeof createCarrierSchema>;

export type CreateCarrierOutputProps = z.output<typeof createCarrierSchema>;

export type CreateCarrierProps = ComponentPropsWithoutRef<'div'>;
