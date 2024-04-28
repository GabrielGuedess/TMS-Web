import { type ReactNode } from 'react';

import { useDarkMode } from 'storybook-dark-mode';

import { themes } from '@storybook/theming';
import { DocsContainer, type DocsContainerProps } from '@storybook/blocks';

type DocumentContainerProps = {
  children: ReactNode;
} & DocsContainerProps;

export const DocumentContainer = ({
  children,
  ...rest
}: DocumentContainerProps) => {
  const isDark = useDarkMode();

  return (
    <DocsContainer {...rest} theme={isDark ? themes.dark : themes.light}>
      {children}
    </DocsContainer>
  );
};
