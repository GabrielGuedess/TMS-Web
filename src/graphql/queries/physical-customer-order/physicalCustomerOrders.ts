import { gql } from '@apollo/client';

export const QUERY_PHYSICAL_CUSTOMER_ORDERS = gql`
  query GetAllPhysicalCustomerOrder(
    $limit: Int
    $offset: Int
    $sort: PhysicalCustomerOrderOrderByWithRelationInput
    $where: PhysicalCustomerOrderWhereInput
  ) {
    countPhysicalCustomerOrder(where: $where)
    getAllPhysicalCustomerOrder(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
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
