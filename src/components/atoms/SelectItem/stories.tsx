import * as Select from '@radix-ui/react-select';
import { type Meta, type StoryFn } from '@storybook/react';

import { SelectItem } from '.';

import { type SelectItemProps } from './types';

export default {
  component: SelectItem,
  args: { value: 'Value' },
  title: 'Atoms/SelectItem',
} as Meta<SelectItemProps>;

export const Default: StoryFn<SelectItemProps> = args => (
  <div className="flex w-full justify-center py-5 text-comet-500 dark:text-white-lilac-50">
    <Select.Root open>
      <Select.Content>
        <SelectItem {...args}>Value</SelectItem>
      </Select.Content>
    </Select.Root>
  </div>
);
