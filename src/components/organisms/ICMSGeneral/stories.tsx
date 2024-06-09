import { type Meta, type StoryFn } from '@storybook/react';

import { ICMSGeneral } from '.';

import { type ICMSGeneralProps } from './types';

export default {
  args: {},
  component: ICMSGeneral,
  title: 'Organisms/ICMSGeneral',
} as Meta<ICMSGeneralProps>;

export const Default: StoryFn<ICMSGeneralProps> = args => (
  <div className="flex w-full justify-center p-5 text-comet-500 dark:text-white-lilac-50">
    <ICMSGeneral className="w-full" {...args} />
  </div>
);
