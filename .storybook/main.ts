import { type StorybookConfig } from '@storybook/nextjs';

export const title = 'TMS-Wolves';

const storybookConfig: StorybookConfig = {
  staticDirs: ['../public'],
  docs: {
    autodocs: true,
  },
  framework: {
    options: {},
    name: '@storybook/nextjs',
  },
  webpackFinal: config => {
    config.resolve?.modules?.push(`${process.cwd()}/src`);

    return config;
  },
  stories: [
    '../src/stories/**/**.mdx',
    '../src/templates/**/stories.tsx',
    '../src/components/**/stories.tsx',
  ],
  addons: [
    '@storybook/addon-a11y',
    '@storybook/addon-links',
    '@storybook/addon-viewport',
    '@storybook/addon-toolbars',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    'storybook-dark-mode',
    'storybook-addon-designs',
    'storybook-addon-performance',
    'storybook-addon-pseudo-states',
    'storybook-addon-apollo-client',
  ],
};

export default storybookConfig;
