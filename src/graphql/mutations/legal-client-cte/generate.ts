import { gql } from '@apollo/client';

export const QUERY_GENERATE_LEGAL_CLIENT_CTE = gql`
  query GenerateLegalClientCte($request: CtePdfLegalClientInput!) {
    generateLegalClientCte(request: $request) {
      cteUrl
    }
  }
`;
