import { type Meta, type StoryFn } from '@storybook/react';

import { ArrowUpIcon } from 'components/atoms/ArrowUpIcon';

import { DropdownSide } from '.';
import { SideButton } from '../SideButton';

import { type DropdownSideProps } from './types';

export default {
  component: DropdownSide,
  title: 'Molecules/DropdownSide',
  args: {
    isOpen: true,
    icon: ArrowUpIcon,
    title: 'Dashboard',
  },
} as Meta<DropdownSideProps>;

export const Default: StoryFn<DropdownSideProps> = args => (
  <div className="flex h-80 w-full justify-center py-5">
    <DropdownSide {...args}>
      <SideButton href="/" title="Analytics" isSubButton />
      <SideButton href="/" title="CRM" isSubButton />
      <SideButton href="/" title="eCommerce" isSubButton />
      <SideButton href="/" title="Logistics" isSubButton />
      <SideButton href="/" title="Academy" isSubButton />
    </DropdownSide>
  </div>
);
