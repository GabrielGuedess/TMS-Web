import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_PHYSICAL_CUSTOMER_ORDERS = gql`
  mutation DeleteManyPhysicalCustomerOrder($ids: [String!]!) {
    deleteManyPhysicalCustomerOrder(ids: $ids) {
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
