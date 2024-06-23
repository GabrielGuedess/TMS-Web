import { gql } from '@apollo/client';

export const QUERY_GENERATE_PHYSICAL_CUSTOMER_CTE = gql`
  query GeneratePhysicalCustomerCte($request: CtePdfPhysicalCustomerInput!) {
    generatePhysicalCustomerCte(request: $request) {
      cteUrl
    }
  }
`;
