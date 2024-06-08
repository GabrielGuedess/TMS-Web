import { gql } from '@apollo/client';

export const QUERY_PHYSICAL_CUSTOMER_ORDERS_COMBO = gql`
  query GetAllPhysicalCustomerOrderCombo(
    $limit: Int
    $offset: Int
    $sort: PhysicalCustomerOrderOrderByWithRelationInput
    $where: PhysicalCustomerOrderWhereInput
  ) {
    getAllPhysicalCustomerOrder(
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
