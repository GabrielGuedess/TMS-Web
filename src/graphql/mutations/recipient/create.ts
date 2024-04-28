import { gql } from '@apollo/client';

export const MUTATION_CREATE_RECIPIENT = gql`
  mutation CreateRecipient($recipient: RecipientInput!) {
    createRecipient(data: $recipient) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;
