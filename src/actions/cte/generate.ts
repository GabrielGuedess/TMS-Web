'use server';

import { apollo } from 'apollo/client';

import { QUERY_GENERATE_PHYSICAL_CUSTOMER_CTE } from 'graphql/mutations/physical-customer-cte/generate';
import {
  type GeneratePhysicalCustomerCteQuery,
  type GeneratePhysicalCustomerCteQueryVariables,
} from 'graphql/generated';

export const generateCTE = async (
  variables: GeneratePhysicalCustomerCteQueryVariables,
) => {
  const data = await apollo().query<
    GeneratePhysicalCustomerCteQuery,
    GeneratePhysicalCustomerCteQueryVariables
  >({
    variables,
    query: QUERY_GENERATE_PHYSICAL_CUSTOMER_CTE,
  });

  return data;
};
