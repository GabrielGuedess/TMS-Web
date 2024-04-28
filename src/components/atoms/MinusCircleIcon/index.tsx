import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type MinusCircleIconProps } from './types';

const MinusCircleIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  MinusCircleIconProps
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
      d="M11.92 22C17.42 22 21.92 17.5 21.92 12C21.92 6.5 17.42 2 11.92 2C6.42001 2 1.92001 6.5 1.92001 12C1.92001 17.5 6.42001 22 11.92 22Z"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      d="M7.92001 12H15.92"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const MinusCircleIcon = forwardRef(MinusCircleIconRef);
