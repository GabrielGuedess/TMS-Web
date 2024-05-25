import { gql } from '@apollo/client';

export const MUTATION_UPDATE_PHYSICAL_CUSTOMER_ORDER = gql`
  mutation UpdatePhysicalCustomerOrder(
    $updatePhysicalCustomerOrderId: String!
    $physicalCustomerOrderInput: PhysicalCustomerOrderUpdateInput!
  ) {
    updatePhysicalCustomerOrder(
      id: $updatePhysicalCustomerOrderId
      physicalCustomerOrderInput: $physicalCustomerOrderInput
    ) {
      carrier_id
      created_at
      created_by
      id
      order
      physicalCustomerId
      quote_table_id
      total_receivable
      total_shipping_cost
      total_tax_payable
      updated_at
      updated_by
    }
  }
`;
