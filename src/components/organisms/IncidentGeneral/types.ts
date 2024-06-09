import { type ComponentPropsWithoutRef } from 'react';

import { type GetIncidentQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type incidentGeneralSchema } from './schema';

export type IncidentGeneralInputProps = z.input<typeof incidentGeneralSchema>;

export type IncidentGeneralOutputProps = z.output<typeof incidentGeneralSchema>;

export type IncidentGeneralProps = {
  data: GetIncidentQuery;
} & ComponentPropsWithoutRef<'div'>;
