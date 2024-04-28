import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type CloseIconProps } from './types';

const CloseIconRef: ForwardRefRenderFunction<SVGSVGElement, CloseIconProps> = (
  { size = 24, ...props },
  ref,
) => (
  <svg
    ref={ref}
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 16 16"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      strokeWidth="1.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 1L15.2418 15.0418"
    />
    <path
      strokeWidth="1.2"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.2417 1L0.999904 15.0418"
    />
  </svg>
);

export const CloseIcon = forwardRef(CloseIconRef);
