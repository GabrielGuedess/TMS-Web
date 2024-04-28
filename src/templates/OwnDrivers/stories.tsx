import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { OwnDrivers } from '.';

import { type OwnDriversProps } from './types';

export default {
  component: OwnDrivers,
  title: 'Templates/OwnDrivers',
} as Meta<OwnDriversProps>;

export const Default: StoryFn<OwnDriversProps> = args => (
  <Base>
    <OwnDrivers {...args} />
  </Base>
);
