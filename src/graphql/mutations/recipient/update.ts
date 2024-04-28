import { gql } from '@apollo/client';

export const MUTATION_UPDATE_RECIPIENT = gql`
  mutation UpdateRecipient(
    $updateRecipientData: RecipientUpdateInput!
    $updateRecipientId: String!
  ) {
    updateRecipient(data: $updateRecipientData, id: $updateRecipientId) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;
