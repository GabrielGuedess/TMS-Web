import { gql } from '@apollo/client';

export const QUERY_FREIGHT_EXPENSE = gql`
  query GetFreightExpense($getFreightExpenseId: String) {
    getFreightExpense(id: $getFreightExpenseId) {
      expenseName
      id
      legalClientOrderId
      physicalCustomerOrderId
      value
      LegalClientOrder {
        id
        order
      }
      PhysicalCustomerOrder {
        id
        order
      }
    }
  }
`;
