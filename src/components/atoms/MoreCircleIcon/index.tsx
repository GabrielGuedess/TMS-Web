import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type MoreCircleIconProps } from './types';

const MoreCircleIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  MoreCircleIconProps
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
      d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
    />
    <path
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.9965 12H16.0054"
    />
    <path
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11.9955 12H12.0045"
    />
    <path
      strokeWidth="2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.99451 12H8.00349"
    />
  </svg>
);

export const MoreCircleIcon = forwardRef(MoreCircleIconRef);
