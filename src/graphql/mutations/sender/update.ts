import { gql } from '@apollo/client';

export const MUTATION_UPDATE_SENDER = gql`
  mutation UpdateSender($data: SenderUpdateInput!, $updateSenderId: String!) {
    updateSender(data: $data, id: $updateSenderId) {
      created_by
      id
      legal_person_id
      natural_person_id
      updated_by
    }
  }
`;
