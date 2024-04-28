import { forwardRef, type ForwardRefRenderFunction } from 'react';

import { type CaretArrowLeftIconProps } from './types';

const CaretArrowLeftIconRef: ForwardRefRenderFunction<
  SVGSVGElement,
  CaretArrowLeftIconProps
> = ({ size = 24, ...props }, ref) => (
  <svg
    ref={ref}
    width={size}
    height={size}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fill="currentColor"
      d="M13.83 19a1 1 0 0 1-.78-.37l-4.83-6a1 1 0 0 1 0-1.27l5-6a1 1 0 0 1 1.54 1.28L10.29 12l4.32 5.36a1 1 0 0 1-.78 1.64"
    />
  </svg>
);

export const CaretArrowLeftIcon = forwardRef(CaretArrowLeftIconRef);
