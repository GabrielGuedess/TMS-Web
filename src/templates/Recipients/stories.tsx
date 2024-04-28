import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { Recipients } from '.';

import { type RecipientsProps } from './types';

export default {
  component: Recipients,
  title: 'Templates/Recipients',
} as Meta<RecipientsProps>;

export const Default: StoryFn<RecipientsProps> = args => (
  <Base>
    <Recipients {...args} />
  </Base>
);
