import { gql } from '@apollo/client';

export const MUTATION_CREATE_PHYSICAL_CUSTOMER = gql`
  mutation CreatePhysicalCustomer($data: PhysicalCustomerInput!) {
    createPhysicalCustomer(data: $data) {
      branch
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;
