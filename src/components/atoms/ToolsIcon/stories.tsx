import { type Meta, type StoryFn } from '@storybook/react';

import { ToolsIcon } from '.';

export default {
  component: ToolsIcon,
  title: 'Atoms/ToolsIcon',
} as Meta;

export const Default: StoryFn = () => <ToolsIcon />;
