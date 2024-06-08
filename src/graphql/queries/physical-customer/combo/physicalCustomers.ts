import { gql } from '@apollo/client';

export const QUERY_PHYSICAL_CUSTOMERS_COMBO = gql`
  query GetAllPhysicalCustomerCombo(
    $limit: Int
    $offset: Int
    $sort: PhysicalCustomerOrderByWithRelationInput
    $where: PhysicalCustomerWhereInput
  ) {
    getAllPhysicalCustomer(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      id
      NaturalPerson {
        cpf
      }
    }
  }
`;
