import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { Carriers } from '.';

import { type CarriersProps } from './types';

export default {
  component: Carriers,
  title: 'Templates/Carriers',
} as Meta<CarriersProps>;

export const Default: StoryFn<CarriersProps> = args => (
  <Base>
    <Carriers {...args} />
  </Base>
);
