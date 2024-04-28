import { type CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
  documents: ['./src/graphql/**/*.ts'],
  schema: 'http://localhost:3000/graphql',
  generates: {
    './src/graphql/generated/schema.json': {
      plugins: ['introspection'],
    },
    './src/graphql/generated/index.ts': {
      hooks: { afterOneFileWrite: 'eslint --fix' },
      plugins: [
        'typescript',
        'typescript-operations',
        'typescript-react-apollo',
      ],
      config: {
        withHOC: false,
        withHooks: true,
        reactApolloVersion: 3,
        withComponents: false,
      },
    },
  },
};

export default config;
