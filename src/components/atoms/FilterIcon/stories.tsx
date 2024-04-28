import { type Meta, type StoryFn } from '@storybook/react';

import { FilterIcon } from '.';

import { type FilterIconProps } from './types';

export default {
  args: { size: 24 },
  component: FilterIcon,
  title: 'Atoms/FilterIcon',
} as Meta<FilterIconProps>;

export const Default: StoryFn<FilterIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <FilterIcon {...args} />
  </div>
);
