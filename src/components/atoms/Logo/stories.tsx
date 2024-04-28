import { type Meta, type StoryFn } from '@storybook/react';

import { Logo } from '.';

import { type LogoProps } from './types';

export default {
  args: {},
  component: Logo,
  title: 'Atoms/Logo',
} as Meta<LogoProps>;

export const Default: StoryFn<LogoProps> = args => <Logo {...args} />;
