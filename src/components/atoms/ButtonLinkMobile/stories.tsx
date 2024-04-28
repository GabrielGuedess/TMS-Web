import { type Meta, type StoryFn } from '@storybook/react';

import { ButtonLinkMobile } from '.';

import { type ButtonLinkMobileProps } from './types';

export default {
  component: ButtonLinkMobile,
  title: 'Atoms/ButtonLinkMobile',
  args: { href: '/', title: 'Storybook' },
} as Meta<ButtonLinkMobileProps>;

export const Default: StoryFn<ButtonLinkMobileProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <ButtonLinkMobile {...args} />
  </div>
);
