import { gql } from '@apollo/client';

export const MUTATION_DELETE_FREIGHT_EXPENSE = gql`
  mutation DeleteFreightExpense($delData: DeletFreightExpenseInput!) {
    deleteFreightExpense(delData: $delData) {
      expenseName
      id
      legalClientOrderId
      physicalCustomerOrderId
      value
    }
  }
`;
