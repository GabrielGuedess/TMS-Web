import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { ICMS } from '.';

import { type ICMSProps } from './types';

export default {
  component: ICMS,
  title: 'Templates/ICMS',
} as Meta<ICMSProps>;

export const Default: StoryFn<ICMSProps> = args => (
  <Base>
    <ICMS {...args} />
  </Base>
);
