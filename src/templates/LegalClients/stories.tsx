import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { LegalClients } from '.';

import { type LegalClientsProps } from './types';

export default {
  component: LegalClients,
  title: 'Templates/LegalClients',
} as Meta<LegalClientsProps>;

export const Default: StoryFn<LegalClientsProps> = args => (
  <Base>
    <LegalClients {...args} />
  </Base>
);
