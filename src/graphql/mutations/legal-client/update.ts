import { gql } from '@apollo/client';

export const MUTATION_UPDATE_LEGAL_CLIENT = gql`
  mutation UpdateLegalClient(
    $updateLegalClientId: String!
    $legalClientInput: LegalClientUpdateInput!
  ) {
    updateLegalClient(
      id: $updateLegalClientId
      legalclientInput: $legalClientInput
    ) {
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
