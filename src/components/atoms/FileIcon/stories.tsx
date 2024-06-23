import { type Meta, type StoryFn } from '@storybook/react';

import { FileIcon } from '.';

export default {
  component: FileIcon,
  title: 'Atoms/FileIcon',
} as Meta;

export const Default: StoryFn = () => <FileIcon />;
