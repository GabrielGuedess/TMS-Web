import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type PauseIconProps } from './types';

const PauseIconRef: ForwardRefRenderFunction<SVGSVGElement, PauseIconProps> = (
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
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
    />
  </svg>
);

export const PauseIcon = forwardRef(PauseIconRef);
