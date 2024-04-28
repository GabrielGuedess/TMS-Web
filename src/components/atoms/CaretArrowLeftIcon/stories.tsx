import { type Meta, type StoryFn } from '@storybook/react';

import { CaretArrowLeftIcon } from '.';

import { type CaretArrowLeftIconProps } from './types';

export default {
  args: { size: 24 },
  component: CaretArrowLeftIcon,
  title: 'Atoms/CaretArrowLeftIcon',
} as Meta<CaretArrowLeftIconProps>;

export const Default: StoryFn<CaretArrowLeftIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CaretArrowLeftIcon {...args} />
  </div>
);
