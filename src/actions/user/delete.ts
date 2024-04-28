'use server';

import { redirect } from 'next/navigation';

import { apollo } from 'apollo/client';

import { MUTATION_DELETE_USER } from 'graphql/mutations/user/delete';
import {
  type DeleteUserMutation,
  type DeleteUserMutationVariables,
} from 'graphql/generated';

import * as Sentry from '@sentry/nextjs';

export const deleteUser = async (variables: DeleteUserMutationVariables) => {
  await Sentry.withServerActionInstrumentation('deleteUser', async () => {
    await apollo().mutate<DeleteUserMutation, DeleteUserMutationVariables>({
      variables,
      mutation: MUTATION_DELETE_USER,
    });

    redirect('/dashboard/collaborators');
  });
};
