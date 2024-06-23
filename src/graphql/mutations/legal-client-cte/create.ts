import { gql } from '@apollo/client';

export const MUTATION_CREATE_LEGAL_CLIENT_CTE = gql`
  mutation CreateLegalClientCte($data: LegalClientCteInput!) {
    createLegalClientCte(data: $data) {
      acessKey
      cteNumber
      cteType
      id
      observations
      orderId
    }
  }
`;
