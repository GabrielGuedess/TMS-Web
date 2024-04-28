import { type Route } from 'next';
import { type LinkProps, type LinkRestProps } from 'next/link';

import { type ElementType, type ComponentPropsWithoutRef } from 'react';

import { type UrlObject } from 'url';

type NextRoutesProps = LinkProps<Route | UrlObject>;

export type SideButtonProps = {
  title: string;
  isOpen?: boolean;
  className?: string;
  isSubButton?: boolean;
  icon?: ElementType<{ size?: number } & ComponentPropsWithoutRef<'svg'>>;
} & Omit<NextRoutesProps, 'ref'> &
  Omit<LinkRestProps, 'ref'>;
