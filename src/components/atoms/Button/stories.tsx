import { type Meta, type StoryFn } from '@storybook/react';

import { Button } from '.';
import { DashboardIcon } from '../DashboardIcon';

import { type ButtonProps } from './types';

export default {
  component: Button,
  title: 'Atoms/Button',
  args: {
    size: 'default',
    color: 'primary',
    variant: 'solid',
    isLoading: false,
    iconAlign: 'left',
    isDisabled: false,
  },
} as Meta<ButtonProps>;

export const Default: StoryFn<ButtonProps> = args => (
  <div className="flex w-full justify-center py-5">
    <Button {...args}>Button</Button>
  </div>
);

export const WithIcon: StoryFn<ButtonProps> = args => (
  <div className="flex w-full justify-center py-5">
    <Button {...args}>Button Icon</Button>
  </div>
);

WithIcon.args = {
  iconFirst: <DashboardIcon />,
};

export const OnlyIcon: StoryFn<ButtonProps> = args => (
  <div className="flex w-full justify-center py-5">
    <Button {...args} />
  </div>
);

OnlyIcon.args = {
  iconFirst: <DashboardIcon />,
};
