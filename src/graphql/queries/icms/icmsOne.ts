import { gql } from '@apollo/client';

export const QUERY_ICMS_ONE = gql`
  query GetICMSOne($getIcmsId: String) {
    getICMS(id: $getIcmsId) {
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
