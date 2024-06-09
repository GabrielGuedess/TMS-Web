import { type ComponentPropsWithoutRef } from 'react';

import { type GetLegalClientOrderModelQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type legalClientOrderGeneralSchema } from './schema';

export type LegalClientOrderGeneralInputProps = z.input<
  typeof legalClientOrderGeneralSchema
>;

export type LegalClientOrderGeneralOutputProps = z.output<
  typeof legalClientOrderGeneralSchema
>;

export type LegalClientOrderGeneralProps = {
  data: GetLegalClientOrderModelQuery;
} & ComponentPropsWithoutRef<'div'>;
