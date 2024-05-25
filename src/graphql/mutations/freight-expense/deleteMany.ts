import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_FREIGHT_EXPENSES = gql`
  mutation DeleteManyFreightExpenses($ids: [String!]!) {
    deleteManyFreightExpenses(ids: $ids) {
      expenseName
      id
      legalClientOrderId
      physicalCustomerOrderId
      value
    }
  }
`;
