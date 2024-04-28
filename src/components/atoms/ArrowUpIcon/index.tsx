import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type ArrowUpIconProps } from './types';

const ArrowUpIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  ArrowUpIconProps
> = ({ size = 10, ...props }, ref) => (
  <svg
    ref={ref}
    fill="none"
    width={size}
    height={size}
    viewBox="0 0 10 10"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      d="M4.35716 2.47737L0.908974 5.82987L5.0443e-07 4.94612L5 0.0848689L10 4.94612L9.09103 5.82987L5.64284 2.47737L5.64284 10.0849L4.35716 10.0849L4.35716 2.47737Z"
    />
  </svg>
);

export const ArrowUpIcon = forwardRef(ArrowUpIconRef);
