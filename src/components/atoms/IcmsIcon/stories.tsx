import { type Meta, type StoryFn } from '@storybook/react';

import { IcmsIcon } from '.';

export default {
  component: IcmsIcon,
  title: 'Atoms/IcmsIcon',
} as Meta;

export const Default: StoryFn = () => <IcmsIcon />;
