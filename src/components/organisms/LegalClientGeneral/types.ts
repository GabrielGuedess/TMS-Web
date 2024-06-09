import { type ComponentPropsWithoutRef } from 'react';

import { type GetLegalClientModelQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type legalClientGeneralSchema } from './schema';

export type LegalClientGeneralInputProps = z.input<
  typeof legalClientGeneralSchema
>;

export type LegalClientGeneralOutputProps = z.output<
  typeof legalClientGeneralSchema
>;

export type LegalClientGeneralProps = {
  data: GetLegalClientModelQuery;
} & ComponentPropsWithoutRef<'div'>;
