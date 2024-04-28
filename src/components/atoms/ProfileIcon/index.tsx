import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type ProfileIconProps } from './types';

const ProfileIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  ProfileIconProps
> = ({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    width={size}
    height={size}
    strokeWidth="2"
    viewBox="0 0 24 24"
    stroke="currentColor"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle r="4" cy="7" cx="12" />
  </svg>
);

export const ProfileIcon = forwardRef(ProfileIconRef);
