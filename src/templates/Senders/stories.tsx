import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { Senders } from '.';

import { type SendersProps } from './types';

export default {
  component: Senders,
  title: 'Templates/Senders',
} as Meta<SendersProps>;

export const Default: StoryFn<SendersProps> = args => (
  <Base>
    <Senders {...args} />
  </Base>
);
