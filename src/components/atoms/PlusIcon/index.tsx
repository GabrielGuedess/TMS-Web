import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type PlusIconProps } from './types';

const PlusIconRef: ForwardRefRenderFunction<SVGSVGElement, PlusIconProps> = (
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
      strokeWidth="2"
      d="M5 12h14m-7 7V5"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const PlusIcon = forwardRef(PlusIconRef);
