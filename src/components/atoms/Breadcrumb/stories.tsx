import { type Meta, type StoryFn } from '@storybook/react';

import { Breadcrumb } from '.';

import { type BreadcrumbProps } from './types';

export default {
  component: Breadcrumb,
  title: 'Atoms/Breadcrumb',
  args: { pageName: 'Storybook' },
} as Meta<BreadcrumbProps>;

export const Default: StoryFn<BreadcrumbProps> = args => (
  <div className="w-full p-5 text-comet-500 dark:text-white-lilac-50">
    <Breadcrumb {...args} />
  </div>
);
