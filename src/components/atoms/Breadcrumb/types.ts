import { type ComponentPropsWithoutRef } from 'react';

export type BreadcrumbProps = {
  pageName: string;
} & ComponentPropsWithoutRef<'div'>;
