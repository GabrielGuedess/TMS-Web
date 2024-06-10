import { type ComponentPropsWithoutRef } from 'react';

import { type GetSenderQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type senderGeneralSchema } from './schema';

export type SenderGeneralInputProps = z.input<typeof senderGeneralSchema>;

export type SenderGeneralOutputProps = z.output<typeof senderGeneralSchema>;

export type SenderGeneralProps = {
  data: GetSenderQuery;
} & ComponentPropsWithoutRef<'div'>;
