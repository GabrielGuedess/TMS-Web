import { type ComponentPropsWithoutRef } from 'react';

import { type GetRecipientQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type recipientGeneralSchema } from './schema';

export type RecipientGeneralInputProps = z.input<typeof recipientGeneralSchema>;

export type RecipientGeneralOutputProps = z.output<
  typeof recipientGeneralSchema
>;

export type RecipientGeneralProps = {
  data: GetRecipientQuery;
} & ComponentPropsWithoutRef<'div'>;
