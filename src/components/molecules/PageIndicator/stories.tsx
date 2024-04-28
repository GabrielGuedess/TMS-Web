import { type Meta, type StoryFn } from '@storybook/react';

import { PageIndicator } from '.';

import { type PageIndicatorProps } from './types';

const length = 5;
let activeIndex = 0;

const onChangeIndex = (value: number) => {
  activeIndex = value;
};

const onChangeWithEdited = () => ({});

export default {
  component: PageIndicator,
  title: 'Molecules/PageIndicator',
  args: {
    length,
    activeIndex,
    onChangeIndex,
    onChangeWithEdited,
  },
} as Meta<PageIndicatorProps>;

export const Default: StoryFn<PageIndicatorProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <PageIndicator {...args} />
  </div>
);
