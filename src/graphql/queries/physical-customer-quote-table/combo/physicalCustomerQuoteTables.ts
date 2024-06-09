import { gql } from '@apollo/client';

export const QUERY_PHYSICAL_CUSTOMER_QUOTE_TABLES_COMBO = gql`
  query GetAllPhysicalCustomerQuoteTableCombo(
    $limit: Int
    $offset: Int
    $sort: PhysicalCustomerQuoteTableOrderByWithRelationInput
    $where: PhysicalCustomerQuoteTableWhereInput
  ) {
    getAllPhysicalCustomerQuoteTable(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      codQuote
      id
    }
  }
`;
