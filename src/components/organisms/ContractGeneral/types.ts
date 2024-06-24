import { type ComponentPropsWithoutRef } from 'react';

import { type GetLegalContractModelQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type contractGeneralSchema } from './schema';

export type ContractGeneralInputProps = z.input<typeof contractGeneralSchema>;

export type ContractGeneralOutputProps = z.output<typeof contractGeneralSchema>;

export type ContractGeneralProps = {
  data: GetLegalContractModelQuery;
} & ComponentPropsWithoutRef<'div'>;
