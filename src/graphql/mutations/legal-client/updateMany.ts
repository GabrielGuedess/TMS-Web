import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_LEGAL_CLIENTS = gql`
  mutation UpdateManyLegalClients(
    $updateManyLegalClients: [LegalClientUpdateManyInput!]!
  ) {
    updateManyLegalClients(updateManyLegalClients: $updateManyLegalClients) {
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
