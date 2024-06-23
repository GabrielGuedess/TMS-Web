import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_ORDER_PROCESSING = gql`
  mutation UpdateManyOrderProcessing(
    $data: [OrderProcessingUpdateManyInput!]!
  ) {
    updateManyOrderProcessing(data: $data) {
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
