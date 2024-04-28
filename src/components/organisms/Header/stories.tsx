import { type Meta, type StoryFn } from '@storybook/react';

import { Header } from '.';

import { type HeaderProps } from './types';

export default {
  component: Header,
  title: 'Organisms/Header',
} as Meta<HeaderProps>;

export const Default: StoryFn<HeaderProps> = args => <Header {...args} />;
