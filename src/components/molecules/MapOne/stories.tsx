import { type Meta, type StoryFn } from '@storybook/react';

import { MapOne } from '.';

import { type MapOneProps } from './types';

export default {
  component: MapOne,
  title: 'Molecules/MapOne',
} as Meta<MapOneProps>;

export const Default: StoryFn<MapOneProps> = args => (
  <div className="w-full justify-center p-5">
    <MapOne {...args} />
  </div>
);
