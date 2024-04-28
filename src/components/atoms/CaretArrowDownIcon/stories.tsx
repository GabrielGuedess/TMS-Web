import { type Meta, type StoryFn } from '@storybook/react';

import { CaretArrowDownIcon } from '.';

import { type CaretArrowDownIconProps } from './types';

export default {
  args: { size: 24 },
  component: CaretArrowDownIcon,
  title: 'Atoms/CaretArrowDownIcon',
} as Meta<CaretArrowDownIconProps>;

export const Default: StoryFn<CaretArrowDownIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CaretArrowDownIcon {...args} />
  </div>
);
