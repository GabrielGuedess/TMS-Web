import { gql } from '@apollo/client';

export const MUTATION_DELETE_PHYSICAL_CUSTOMER_ORDER = gql`
  mutation DeletePhysicalCustomerOrder(
    $deletePhysicalCustomerOrderId: String!
  ) {
    deletePhysicalCustomerOrder(id: $deletePhysicalCustomerOrderId) {
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
