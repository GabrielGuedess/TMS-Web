import { gql } from '@apollo/client';

export const MUTATION_DELETE_PHYSICAL_CUSTOMER = gql`
  mutation DeletePhysicalCustomer($deletePhysicalCustomerId: String!) {
    deletePhysicalCustomer(id: $deletePhysicalCustomerId) {
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
