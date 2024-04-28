import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type CloseCircleIconProps } from './types';

const CloseCircleIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  CloseCircleIconProps
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
      d="M9.16998 14.83L14.83 9.17"
    />
    <path
      strokeWidth="1.5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M14.83 14.83L9.16998 9.17"
    />
  </svg>
);

export const CloseCircleIcon = forwardRef(CloseCircleIconRef);
