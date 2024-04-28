import { type Meta, type StoryFn } from '@storybook/react';

import { Container } from '.';

import { type ContainerProps } from './types';

export default {
  component: Container,
  title: 'Atoms/Container',
} as Meta<ContainerProps>;

export const Default: StoryFn<ContainerProps> = args => (
  <div className="w-full p-5 text-comet-500 dark:text-white-lilac-50">
    <Container className="px-5" {...args}>
      <h1>Storybook</h1>
    </Container>
  </div>
);
