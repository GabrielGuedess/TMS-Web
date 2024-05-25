import { gql } from '@apollo/client';

export const QUERY_FREIGHT_EXPENSES = gql`
  query GetAllFreightExpenses(
    $limit: Int
    $offset: Int
    $sort: FreightExpensesOrderByWithRelationInput
    $where: FreightExpensesWhereInput
  ) {
    countFreightExpenses(where: $where)
    getAllFreightExpenses(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      expenseName
      id
      legalClientOrderId
      physicalCustomerOrderId
      value
    }
  }
`;
