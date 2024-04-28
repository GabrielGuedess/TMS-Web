import { type Meta, type StoryFn } from '@storybook/react';

import { CalendarIcon } from '.';

import { type CalendarIconProps } from './types';

export default {
  args: { size: 24 },
  component: CalendarIcon,
  title: 'Atoms/CalendarIcon',
} as Meta<CalendarIconProps>;

export const Default: StoryFn<CalendarIconProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <CalendarIcon {...args} />
  </div>
);
