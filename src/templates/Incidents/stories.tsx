import { Base } from 'templates/Base';
import { type Meta, type StoryFn } from '@storybook/react';

import { Incidents } from '.';

import { type IncidentsProps } from './types';

export default {
  component: Incidents,
  title: 'Templates/Incidents',
} as Meta<IncidentsProps>;

export const Default: StoryFn<IncidentsProps> = args => (
  <Base>
    <Incidents {...args} />
  </Base>
);
