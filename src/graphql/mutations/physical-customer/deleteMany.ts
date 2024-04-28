import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_PHYSICAL_CUSTOMERS = gql`
  mutation DeleteManyPhysicalCustomers(
    $deleteManyPhysicalCustomers: [String!]!
  ) {
    deleteManyPhysicalCustomers(
      deleteManyPhysicalCustomers: $deleteManyPhysicalCustomers
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
