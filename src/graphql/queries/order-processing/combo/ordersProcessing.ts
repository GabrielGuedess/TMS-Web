import { gql } from '@apollo/client';

export const QUERY_ORDERS_PROCESSING_COMBO = gql`
  query GetAllOrderProcessingCombo(
    $limit: Int
    $offset: Int
    $sort: OrderProcessingOrderByWithRelationInput
    $where: OrderProcessingWhereInput
  ) {
    getAllOrderProcessing(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      id
      order_processing_number
    }
  }
`;
