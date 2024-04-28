import { type Meta, type StoryFn } from '@storybook/react';

import { ShippingCompanyIcon } from '.';

export default {
  component: ShippingCompanyIcon,
  title: 'Atoms/ShippingCompanyIcon',
} as Meta;

export const Default: StoryFn = () => <ShippingCompanyIcon />;
