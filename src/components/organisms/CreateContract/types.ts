import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createContractSchema } from './schema';

export type CreateContractInputProps = z.input<typeof createContractSchema>;

export type CreateContractOutputProps = z.output<typeof createContractSchema>;

export type CreateContractProps = ComponentPropsWithoutRef<'div'>;
