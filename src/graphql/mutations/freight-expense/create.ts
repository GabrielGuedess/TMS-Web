import { gql } from '@apollo/client';

export const MUTATION_CREATE_FREIGHT_EXPENSE = gql`
  mutation CreateFreightExpense($data: FreightExpenseInput!) {
    createFreightExpense(data: $data) {
      expenseName
      id
      legalClientOrderId
      physicalCustomerOrderId
      value
    }
  }
`;
