import { type ComponentPropsWithoutRef } from 'react';

import { type GetIcmsOneQuery } from 'graphql/generated';

import { type z } from 'zod';

import { type ICMSGeneralSchema } from './schema';

export type ICMSGeneralInputProps = z.input<typeof ICMSGeneralSchema>;

export type ICMSGeneralOutputProps = z.output<typeof ICMSGeneralSchema>;

export type ICMSGeneralProps = {
  data: GetIcmsOneQuery;
} & ComponentPropsWithoutRef<'div'>;
