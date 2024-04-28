import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_SENDERS = gql`
  mutation UpdateManySenders($updateManySenders: [SenderUpdateManyInput!]!) {
    updateManySenders(updateManySenders: $updateManySenders) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;
