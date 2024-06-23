import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { LegalContracts } from '.';

import { type LegalContractsProps } from './types';

export default {
  component: LegalContracts,
  title: 'Templates/LegalContracts',
} as Meta<LegalContractsProps>;

export const Default: StoryFn<LegalContractsProps> = args => (
  <Base>
    <LegalContracts {...args} />
  </Base>
);
