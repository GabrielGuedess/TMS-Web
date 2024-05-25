import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { LegalClientOrders } from '.';

import { type LegalClientOrdersProps } from './types';

export default {
  component: LegalClientOrders,
  title: 'Templates/LegalClientOrders',
} as Meta<LegalClientOrdersProps>;

export const Default: StoryFn<LegalClientOrdersProps> = args => (
  <Base>
    <LegalClientOrders {...args} />
  </Base>
);
