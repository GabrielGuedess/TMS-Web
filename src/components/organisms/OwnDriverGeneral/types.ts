import { type ComponentPropsWithoutRef } from 'react';

import { type GetOwnDriverQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type ownDriverGeneralSchema } from './schema';

export type OwnDriverGeneralInputProps = z.input<typeof ownDriverGeneralSchema>;

export type OwnDriverGeneralOutputProps = z.output<
  typeof ownDriverGeneralSchema
>;

export type OwnDriverGeneralProps = {
  data: GetOwnDriverQuery;
} & ComponentPropsWithoutRef<'div'>;
