import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_PHYSICAL_CUSTOMERS = gql`
  mutation UpdateManyPhysicalCustomers(
    $updateManyPhysicalCustomers: [PhysicalCustomerUpdateManyInput!]!
  ) {
    updateManyPhysicalCustomers(
      updateManyPhysicalCustomers: $updateManyPhysicalCustomers
    ) {
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
