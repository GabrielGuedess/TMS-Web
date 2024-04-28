import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type ClockCircleIconProps } from './types';

const ClockCircleIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  ClockCircleIconProps
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
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M7.75 12L10.58 14.83L16.25 9.17"
    />
  </svg>
);

export const ClockCircleIcon = forwardRef(ClockCircleIconRef);
