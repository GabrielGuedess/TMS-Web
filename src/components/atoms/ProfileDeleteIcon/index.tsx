import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type ProfileDeleteIconProps } from './types';

const ProfileDeleteIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  ProfileDeleteIconProps
> = ({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.4101 18.09L15.5901 20.91"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.4101 20.91L15.5901 18.09"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.1601 10.87C12.0601 10.86 11.9401 10.86 11.8301 10.87C9.45006 10.79 7.56006 8.84 7.56006 6.44C7.56006 3.99 9.54006 2 12.0001 2C14.4501 2 16.4401 3.99 16.4401 6.44C16.4301 8.84 14.5401 10.79 12.1601 10.87Z"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21.81C10.18 21.81 8.37005 21.35 6.99005 20.43C4.57005 18.81 4.57005 16.17 6.99005 14.56C9.74005 12.72 14.25 12.72 17 14.56"
    />
  </svg>
);

export const ProfileDeleteIcon = forwardRef(ProfileDeleteIconRef);
