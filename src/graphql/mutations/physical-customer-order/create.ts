import { gql } from '@apollo/client';

export const MUTATION_CREATE_PHYSICAL_CUSTOMER_ORDER = gql`
  mutation CreatePhysicalCustomerOrder(
    $physicalCustomerOrderInput: PhysicalCustomerOrderInput!
  ) {
    createPhysicalCustomerOrder(
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
