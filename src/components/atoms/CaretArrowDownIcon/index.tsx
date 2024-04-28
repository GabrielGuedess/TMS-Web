import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type CaretArrowDownIconProps } from './types';

const CaretArrowDownIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  CaretArrowDownIconProps
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
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.9201 8.95L13.4001 15.47C12.6301 16.24 11.3701 16.24 10.6001 15.47L4.08008 8.95"
    />
  </svg>
);

export const CaretArrowDownIcon = forwardRef(CaretArrowDownIconRef);
