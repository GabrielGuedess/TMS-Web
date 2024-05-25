import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_ICMS = gql`
  mutation UpdateManyIcms($data: [IcmsUpdateManyInput!]!) {
    updateManyIcms(data: $data) {
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
