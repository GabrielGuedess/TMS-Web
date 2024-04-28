import { gql } from '@apollo/client';

export const MUTATION_DELETE_LEGAL_CLIENT = gql`
  mutation DeleteLegalClient($deleteLegalClientId: String!) {
    deleteLegalClient(id: $deleteLegalClientId) {
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
