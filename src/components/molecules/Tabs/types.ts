import { type Route } from 'next';
import { type LinkProps } from 'next/link';

import { type UrlObject } from 'url';

type NextRoutesProps = LinkProps<Route | UrlObject>;

export type TabProps = {
  title: string;
} & NextRoutesProps;

export type TabsProps = {
  tabs: TabProps[];
};
