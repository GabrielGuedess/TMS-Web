import { gql } from '@apollo/client';

export const MUTATION_UPDATE_FREIGHT_EXPENSE = gql`
  mutation UpdateFreightExpense(
    $updateFreightExpenseId: String!
    $upData: FreightExpenseUpdateInput!
  ) {
    updateFreightExpense(id: $updateFreightExpenseId, upData: $upData) {
      expenseName
      id
      legalClientOrderId
      physicalCustomerOrderId
      value
    }
  }
`;
