import { gql } from '@apollo/client';

export const QUERY_ORDERS_PROCESSING = gql`
  query GetAllOrderProcessing(
    $limit: Int
    $offset: Int
    $sort: OrderProcessingOrderByWithRelationInput
    $where: OrderProcessingWhereInput
  ) {
    countOrderProcessing(where: $where)
    getAllOrderProcessing(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      created_at
      created_by
      driver_id
      end_at
      id
      order_processing_number
      start_at
      status
      total_distance
      total_spend_liters
      total_spending_money
      updated_at
      updated_by
      vehicle_id
    }
  }
`;
