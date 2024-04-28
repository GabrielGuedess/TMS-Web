'use server';

import { apollo } from 'apollo/client';

import { MUTATION_UPDATE_USER } from 'graphql/mutations/user/update';
import {
  type UpdateUserMutation,
  type UpdateUserMutationVariables,
} from 'graphql/generated';

import * as Sentry from '@sentry/nextjs';

export const updateUser = async (variables: UpdateUserMutationVariables) => {
  const result = await Sentry.withServerActionInstrumentation(
    'updateUser',
    async () => {
      const data = await apollo().mutate<
        UpdateUserMutation,
        UpdateUserMutationVariables
      >({
        variables,
        mutation: MUTATION_UPDATE_USER,
      });

      return data;
    },
  );

  return result;
};
