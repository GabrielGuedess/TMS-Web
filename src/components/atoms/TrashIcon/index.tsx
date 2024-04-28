import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type TrashIconProps } from './types';

const TrashIconRef: ForwardRefRenderFunction<SVGSVGElement, TrashIconProps> = (
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
      d="M21 5.98C17.67 5.65 14.32 5.48 10.98 5.48C9 5.48 7.02 5.58 5.04 5.78L3 5.98"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M8.5 4.97L8.72 3.66C8.88 2.71 9 2 10.69 2H13.31C15 2 15.13 2.75 15.28 3.67L15.5 4.97"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M18.85 9.14L18.2 19.21C18.09 20.78 18 22 15.21 22H8.78999C5.99999 22 5.90999 20.78 5.79999 19.21L5.14999 9.14"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      d="M10.33 16.5H13.66"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      strokeWidth="1.5"
      d="M9.5 12.5H14.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const TrashIcon = forwardRef(TrashIconRef);
