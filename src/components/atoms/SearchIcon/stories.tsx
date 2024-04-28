import { type Meta, type StoryFn } from '@storybook/react';

import { SearchIcon } from '.';

import { type SearchIconProps } from './types';

export default {
  component: SearchIcon,
  title: 'Atoms/SearchIcon',
  args: { width: 23, height: 20 },
} as Meta<SearchIconProps>;

export const Default: StoryFn<SearchIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <SearchIcon {...args} />
  </div>
);
