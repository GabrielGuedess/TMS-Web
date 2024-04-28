import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_SENDERS = gql`
  mutation DeleteManySenders($deleteManySenders: [String!]!) {
    deleteManySenders(deleteManySenders: $deleteManySenders) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;
