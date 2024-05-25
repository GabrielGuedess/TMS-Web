import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_PHYSICAL_CUSTOMER_ORDERS = gql`
  mutation UpdateManyPhysicalCustomerOrder(
    $data: [PhysicalCustomerOrderUpdateManyInput!]!
  ) {
    updateManyPhysicalCustomerOrder(data: $data) {
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
