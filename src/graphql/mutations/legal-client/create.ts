import { gql } from '@apollo/client';

export const MUTATION_CREATE_LEGAL_CLIENT = gql`
  mutation CreateLegalClient($legalClientInput: LegalClientInput!) {
    createLegalClient(legalclientInput: $legalClientInput) {
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
