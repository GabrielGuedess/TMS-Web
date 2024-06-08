import { type ComponentPropsWithoutRef } from 'react';

import { type z } from 'zod';

import { type createIncidentSchema } from './schema';

export type CreateIncidentInputProps = z.input<typeof createIncidentSchema>;

export type CreateIncidentOutputProps = z.output<typeof createIncidentSchema>;

export type CreateIncidentProps = ComponentPropsWithoutRef<'div'>;
