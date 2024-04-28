import { gql } from '@apollo/client';

export const MUTATION_CREATE_SENDER = gql`
  mutation CreateSender($sender: SenderInput!) {
    createSender(data: $sender) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;
