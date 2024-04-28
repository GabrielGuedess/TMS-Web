import { type ComponentPropsWithRef } from 'react';

export type BadgeProps = {
  title: string;
  variant?: 'solid' | 'label';
  color?:
    | 'info'
    | 'dark'
    | 'danger'
    | 'primary'
    | 'success'
    | 'warning'
    | 'secondary';
} & ComponentPropsWithRef<'div'>;
