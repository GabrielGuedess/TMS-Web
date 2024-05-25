import { gql } from '@apollo/client';

export const MUTATION_CREATE_ICMS = gql`
  mutation CreateIcms($data: IcmsInput!) {
    createIcms(data: $data) {
      aliquot
      created_by
      effective_date
      id
      recipient_state
      state_origin
      updated_by
    }
  }
`;
