import { gql } from '@apollo/client';

export const MUTATION_COMPLETE_ORDER_PROCESSING = gql`
  mutation CompletedOrder($completedOrderId: String) {
    completedOrder(id: $completedOrderId) {
      order_processing_number
    }
  }
`;
