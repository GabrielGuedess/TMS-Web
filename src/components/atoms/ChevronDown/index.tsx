import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type ChevronDownProps } from './types';

const ChevronDownRef: ForwardRefRenderFunction<
  SVGSVGElement,
  ChevronDownProps
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
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path d="m6 9 6 6 6-6" />
  </svg>
);

export const ChevronDown = forwardRef(ChevronDownRef);
