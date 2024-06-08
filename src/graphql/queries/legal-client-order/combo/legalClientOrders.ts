import { gql } from '@apollo/client';

export const QUERY_LEGAL_CLIENT_ORDERS_COMBO = gql`
  query GetAllLegalClientOrderCombo(
    $limit: Int
    $offset: Int
    $sort: LegalClientOrderOrderByWithRelationInput
    $where: LegalClientOrderWhereInput
  ) {
    countLegalClientOrder(where: $where)
    getAllLegalClientOrder(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      id
      order
    }
  }
`;
