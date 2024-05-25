import { gql } from '@apollo/client';

export const MUTATION_DELETE_ICMS = gql`
  mutation DeleteIcms($deleteIcmsId: String!) {
    deleteIcms(id: $deleteIcmsId) {
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
