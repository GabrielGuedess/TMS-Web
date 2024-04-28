import { gql } from '@apollo/client';

export const MUTATION_DELETE_SENDER = gql`
  mutation DeleteSender($deleteSenderId: String!) {
    deleteSender(id: $deleteSenderId) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;
