import { gql } from '@apollo/client';

export const QUERY_RECIPIENT = gql`
  query GetRecipient($getRecipientId: String) {
    getRecipient(id: $getRecipientId) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
      LegalPerson {
        id
        fantasy_name
        cnpj
      }
      NaturalPerson {
        id
        cpf
        name
      }
    }
  }
`;
