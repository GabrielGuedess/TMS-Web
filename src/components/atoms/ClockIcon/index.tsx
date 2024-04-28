import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type ClockIconProps } from './types';

const ClockIconRef: ForwardRefRenderFunction<SVGSVGElement, ClockIconProps> = (
  { size = 24, ...props },
  ref,
) => (
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
      d="M22 12C22 17.52 17.52 22 12 22C6.48 22 2 17.52 2 12C2 6.48 6.48 2 12 2C17.52 2 22 6.48 22 12Z"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.71 15.18L12.61 13.33C12.07 13.01 11.63 12.24 11.63 11.61V7.51001"
    />
  </svg>
);

export const ClockIcon = forwardRef(ClockIconRef);
