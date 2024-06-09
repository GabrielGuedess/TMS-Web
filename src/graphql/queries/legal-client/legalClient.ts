import { gql } from '@apollo/client';

export const QUERY_LEGAL_CLIENT = gql`
  query GetLegalClientModel($cnpj: String) {
    getLegalClientModel(cnpj: $cnpj) {
      LegalPerson {
        id
        fantasy_name
        cnpj
      }
      branch
      created_at
      created_by
      id
      legal_person_id
      updated_at
      updated_by
    }
  }
`;
