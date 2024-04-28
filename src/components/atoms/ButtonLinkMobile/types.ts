import { type Route } from 'next';
import { type LinkProps, type LinkRestProps } from 'next/link';

import { type UrlObject } from 'url';

type NextRoutesProps = LinkProps<Route | UrlObject>;

export type ButtonLinkMobileProps = {
  title: string;
  className?: string;
} & Omit<NextRoutesProps, 'ref'> &
  Omit<LinkRestProps, 'ref'>;
