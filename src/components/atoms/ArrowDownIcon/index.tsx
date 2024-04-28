import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type ArrowDownIconProps } from './types';

const ArrowDownIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  ArrowDownIconProps
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
      d="M5.64284 7.69237L9.09102 4.33987L10 5.22362L5 10.0849L-8.98488e-07 5.22362L0.908973 4.33987L4.35716 7.69237L4.35716 0.0848701L5.64284 0.0848704L5.64284 7.69237Z"
    />
  </svg>
);

export const ArrowDownIcon = forwardRef(ArrowDownIconRef);
