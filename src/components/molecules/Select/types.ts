import { type SelectProps as SelectRadixProps } from '@radix-ui/react-select';

export type SelectProps = {
  label?: string;
  className?: string;
  placeholder: string;
  hasHeight?: boolean;
  isInvalid?: boolean;
  errorMessage?: string;
  values: string[] | number[];
} & SelectRadixProps;
