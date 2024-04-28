import '../src/styles/global.css';

import { ThemeProvider } from 'next-themes';

import { Suspense } from 'react';

import { useDarkMode } from 'storybook-dark-mode';
import { withPerformance } from 'storybook-addon-performance';

import { themes } from '@storybook/theming';
import { type Preview } from '@storybook/react';
import { SessionProvider } from 'next-auth/react';
import { MockedProvider } from '@apollo/client/testing';

import { DocumentContainer } from './components/DocumentContainer';

const preview: Preview = {
  parameters: {
    layout: 'fullscreen',
    nextjs: {
      appDirectory: true,
    },
    apolloClient: {
      MockedProvider,
    },
    docs: {
      container: DocumentContainer,
    },
    darkMode: {
      current: 'light',
      dark: themes.dark,
      darkClass: 'dark',
      lightClass: 'light',
      classTarget: 'html',
      light: themes.normal,
    },
    options: {
      storySort: {
        locales: 'en-US',
        method: 'alphabetical',
        order: [
          'Home',
          'Tokens',
          'Atoms',
          'Molecules',
          'Organisms',
          'Templates',
        ],
      },
    },
  },
  decorators: [
    Story => {
      const isDark = useDarkMode();

      return (
        <Suspense>
          <SessionProvider
            session={{
              id: 'a32f76e1-dbe9-4746-8ba2-5ae3ceb78047',
              token: '123',
              expires: '100',
              __typename: 'AuthModel',
              username: 'GabrielGuedess',
              email: 'gabrielrguedess@gmail.com',
            }}
          >
            <ThemeProvider
              attribute="class"
              themes={['dark', 'light']}
              forcedTheme={isDark ? 'dark' : 'light'}
              enableSystem
            >
              <Story />
            </ThemeProvider>
          </SessionProvider>
        </Suspense>
      );
    },
    withPerformance,
  ],
};

export default preview;
