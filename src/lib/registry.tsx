'use client';

import { useServerInsertedHTML } from 'next/navigation';

import React, { useState } from 'react';

import { ServerStyleSheet, StyleSheetManager } from 'styled-components';

export const StyledComponentsRegistry = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

  useServerInsertedHTML(() => {
    const styles = styledComponentsStyleSheet.getStyleElement();

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    styledComponentsStyleSheet.instance.clearTag();

    // eslint-disable-next-line react/jsx-no-useless-fragment
    return <>{styles}</>;
  });

  // eslint-disable-next-line react/jsx-no-useless-fragment
  if (typeof window !== 'undefined') return <>{children}</>;

  return (
    <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
      {children}
    </StyleSheetManager>
  );
};
