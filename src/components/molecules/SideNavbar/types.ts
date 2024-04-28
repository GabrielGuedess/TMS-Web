import { type ComponentPropsWithoutRef } from 'react';

export type SideNavbarProps = {
  isOpen?: boolean;
} & ComponentPropsWithoutRef<'nav'>;
