import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_RECIPIENTS = gql`
  mutation DeleteManyRecipients($deleteManyRecipients: [String!]!) {
    deleteManyRecipients(deleteManyRecipients: $deleteManyRecipients) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;
