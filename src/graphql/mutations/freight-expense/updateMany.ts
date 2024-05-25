import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_FREIGHT_EXPENSES = gql`
  mutation UpdateManyFreightExpenses($data: [FreightExpenseUpdateManyInput!]!) {
    updateManyFreightExpenses(Data: $data) {
      expenseName
      id
      legalClientOrderId
      physicalCustomerOrderId
      value
    }
  }
`;
