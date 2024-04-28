import { gql } from '@apollo/client';

export const MUTATION_DELETE_RECIPIENT = gql`
  mutation DeleteRecipient($deleteRecipientId: String!) {
    deleteRecipient(id: $deleteRecipientId) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;
