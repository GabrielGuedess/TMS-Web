import { type ComponentPropsWithoutRef } from 'react';

export type PageIndicatorProps = {
  length: number;
  activeIndex: number;
  isLoading?: boolean;
  hasEdited?: boolean;
  onChangeWithEdited: () => void;
  onChangeIndex: (index: number) => void;
} & ComponentPropsWithoutRef<'div'>;
