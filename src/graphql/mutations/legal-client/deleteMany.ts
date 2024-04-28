import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_LEGAL_CLIENTS = gql`
  mutation DeleteManyLegalClients($deleteManyLegalClients: [String!]!) {
    deleteManyLegalClients(deleteManyLegalClients: $deleteManyLegalClients) {
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
