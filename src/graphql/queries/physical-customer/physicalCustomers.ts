import { gql } from '@apollo/client';

export const QUERY_PHYSICAL_CUSTOMERS = gql`
  query GetAllPhysicalCustomer(
    $limit: Int
    $offset: Int
    $sort: PhysicalCustomerOrderByWithRelationInput
    $where: PhysicalCustomerWhereInput
  ) {
    totalPhysicalCustomers(where: $where)
    getAllPhysicalCustomer(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      branch
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;
