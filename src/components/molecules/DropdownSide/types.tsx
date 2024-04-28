import {
  type ReactNode,
  type ElementType,
  type ComponentPropsWithoutRef,
} from 'react';

export type DropdownSideProps = {
  title: string;
  subPath: string;
  children: ReactNode;
  isNavbarOpen: boolean;
  icon: ElementType<{ size?: number } & ComponentPropsWithoutRef<'svg'>>;
};
