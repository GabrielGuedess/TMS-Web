import { gql } from '@apollo/client';

export const QUERY_ORDERS_PROCESSING_ONE = gql`
  query GetOrderProcessingOne($getOrderProcessingId: String) {
    getOrderProcessing(id: $getOrderProcessingId) {
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
      OwnDriver {
        id
        cnh
      }
      Vehicle {
        id
        plate
        VehicleModel {
          name
        }
      }
      LegalClientOrders {
        id
        order
      }
      PhysicalCustomerOrders {
        id
        order
      }
    }
  }
`;
