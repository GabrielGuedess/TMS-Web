import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_RECIPIENTS = gql`
  mutation UpdateManyRecipients(
    $updateManyRecipients: [RecipientUpdateManyInput!]!
  ) {
    updateManyRecipients(updateManyRecipients: $updateManyRecipients) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;
