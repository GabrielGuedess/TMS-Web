import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { NotificationIcon } from 'components/atoms/NotificationIcon';

import { type NotificationProps } from './types';

const NotificationRef: ForwardRefRenderFunction<
  HTMLDivElement,
  NotificationProps
> = ({ ...props }, ref) => (
  <div ref={ref} className="relative transition-all" {...props}>
    <strong className="absolute right-0 top-0 aspect-square rounded-full bg-primary-400 px-1 text-center text-[0.5rem] text-white-lilac-50">
      2
    </strong>
    <NotificationIcon />
  </div>
);

export const Notification = forwardRef(NotificationRef);
