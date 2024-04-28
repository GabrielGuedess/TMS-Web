import nextJest from 'next/jest';

import { type Config } from 'jest';

const createJestConfig = nextJest({
  dir: './',
});

const config: Config = {
  collectCoverage: true,
  testEnvironment: 'jsdom',
  modulePaths: ['<rootDir>/src/', '<rootDir>/.jest'],
  testPathIgnorePatterns: ['/node_modules/', '/.next/'],
  setupFilesAfterEnv: ['<rootDir>/.jest/jest.setup.ts'],
  collectCoverageFrom: [
    'src/**/*.ts(x)?',
    '!src/app/**/*.tsx',
    '!src/pages/**/*.tsx',
    '!src/stories/**/*.ts(x)?',
    '!src/**/stories.tsx',
    '!src/styles/**/*.ts',
    '!src/lib/**',
    '!src/apollo/**',
    '!src/hooks/**',
    '!src/functions/**',
    '!src/**/mock.ts',
    '!src/**/schema.ts',
    '!src/graphql/**/*.ts',
    '!src/utils/tests/*.ts(x)?',
    '!src/app/api/**/*.ts(x)?',
    '!src/middleware.ts',
    '!src/providers/**',
    '!src/actions/**',
    '!src/components/atoms/Analytics/**',
    '!src/components/organisms/DataTable/**',
    '!src/components/molecules/AudioVisualizer/**',
  ],
};

export default createJestConfig(config);
