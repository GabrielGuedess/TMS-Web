import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_ICMS = gql`
  mutation DeleteManyIcms($ids: [String!]!) {
    deleteManyIcms(ids: $ids) {
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
