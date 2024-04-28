import { type ComponentPropsWithoutRef } from 'react';

import { type UserQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type userGeneral } from './schema';

export type UserGeneralSchemaProps = z.infer<typeof userGeneral>;

export type UserGeneralProps = {
  photo?: string;
  data: UserQuery;
} & ComponentPropsWithoutRef<'div'>;
