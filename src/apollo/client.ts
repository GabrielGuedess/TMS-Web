import { getServerSession } from 'next-auth';

import { cache } from 'react';

import { setContext } from '@apollo/client/link/context';
import { from, type ApolloClient } from '@apollo/client';
import createUploadLink from 'apollo-upload-client/createUploadLink.mjs';
import {
  NextSSRApolloClient,
  NextSSRInMemoryCache,
} from '@apollo/experimental-nextjs-app-support/ssr';

import { authOptions } from 'lib/auth';

const httpLink = createUploadLink({
  uri: process.env.NEXT_PUBLIC_API_URL,
});

function registerApolloClient(client: () => ApolloClient<unknown>) {
  const apollo = cache(client);

  return {
    apollo,
  };
}

const authLink = setContext(async (_, { headers }) => {
  const session = await getServerSession(authOptions);

  return {
    headers: {
      ...headers,
      authorization: session ? `Bearer ${session.token}` : '',
    } as Headers,
  };
});

export const { apollo } = registerApolloClient(
  () =>
    new NextSSRApolloClient({
      link: from([authLink, httpLink]),
      cache: new NextSSRInMemoryCache(),
    }),
);
