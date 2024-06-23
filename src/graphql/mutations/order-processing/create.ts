import { gql } from '@apollo/client';

export const MUTATION_CREATE_ORDER_PROCESSING = gql`
  mutation CreateOrderProcessing($data: OrderProcessingInput!) {
    createOrderProcessing(data: $data) {
      created_at
      created_by
      driver_id
      end_at
      id
      order_processing
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
