import { gql } from '@apollo/client';

export const MUTATION_UPDATE_PHYSICAL_CUSTOMER = gql`
  mutation UpdatePhysicalCustomer(
    $updatePhysicalCustomerId: String!
    $ownDriverUpdate: PhysicalCustomerUpdateInput!
  ) {
    updatePhysicalCustomer(
      id: $updatePhysicalCustomerId
      ownDriverUpdate: $ownDriverUpdate
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
