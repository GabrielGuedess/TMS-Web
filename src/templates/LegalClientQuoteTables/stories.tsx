import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { LegalClientQuoteTables } from '.';

import { type LegalClientQuoteTablesProps } from './types';

export default {
  component: LegalClientQuoteTables,
  title: 'Templates/LegalClientQuoteTables',
} as Meta<LegalClientQuoteTablesProps>;

export const Default: StoryFn<LegalClientQuoteTablesProps> = args => (
  <Base>
    <LegalClientQuoteTables {...args} />
  </Base>
);
