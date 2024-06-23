import { gql } from '@apollo/client';

export const MUTATION_CREATE_PHYSICAL_CUSTOMER_CTE = gql`
  mutation CreatePhysicalCustomerCte($data: PhysicalCustomerCteInput!) {
    createPhysicalCustomerCte(data: $data) {
      acessKey
      cteNumber
      cteType
      id
      observations
      orderId
    }
  }
`;
