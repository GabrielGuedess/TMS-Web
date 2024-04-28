import { type Meta, type StoryFn } from '@storybook/react';

import { Search } from '.';

import { type SearchProps } from './types';

export default {
  component: Search,
  title: 'Molecules/Search',
} as Meta<SearchProps>;

export const Default: StoryFn<SearchProps> = args => (
  <div className="flex w-full justify-center py-5">
    <Search {...args} />
  </div>
);
