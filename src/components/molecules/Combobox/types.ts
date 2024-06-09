import { type PopoverProps } from '@radix-ui/react-popover';

export type ValueProps = {
  id: string;
  description: string;
};

export type ComboBoxProps = {
  label?: string;
  search: string;
  value: ValueProps;
  className?: string;
  isLoading?: boolean;
  placeholder: string;
  isInvalid?: boolean;
  isDisable?: boolean;
  emptyMessage: string;
  errorMessage?: string;
  values?: ValueProps[];
  placeholderCommand: string;
  setSearch: (value: string) => void;
  setValue: (value: ValueProps) => void;
} & PopoverProps;
