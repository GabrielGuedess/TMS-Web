import { gql } from '@apollo/client';

export const QUERY_ICMS = gql`
  query GetAllICMS(
    $limit: Int
    $offset: Int
    $sort: IcmsOrderByWithRelationInput
    $where: IcmsWhereInput
  ) {
    countIcms(where: $where)
    getAllICMS(limit: $limit, offset: $offset, sort: $sort, where: $where) {
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
