'use server';

import { apollo } from 'apollo/client';

import { QUERY_GENERATE_LEGAL_CLIENT_CTE } from 'graphql/mutations/legal-client-cte/generate';
import {
  type GenerateLegalClientCteQuery,
  type GenerateLegalClientCteQueryVariables,
} from 'graphql/generated';

export const generateLegalCTE = async (
  variables: GenerateLegalClientCteQueryVariables,
) => {
  const data = await apollo().query<
    GenerateLegalClientCteQuery,
    GenerateLegalClientCteQueryVariables
  >({
    variables,
    query: QUERY_GENERATE_LEGAL_CLIENT_CTE,
  });

  return data;
};
