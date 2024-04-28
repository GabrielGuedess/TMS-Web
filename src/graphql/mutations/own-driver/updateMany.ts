import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_OWN_DRIVERS = gql`
  mutation UpdateManyOwnDrivers(
    $updateManyOwnDrivers: [OwnDriverUpdateManyInput!]!
  ) {
    updateManyOwnDrivers(updateManyOwnDrivers: $updateManyOwnDrivers) {
      cnh
      cnh_category
      cnh_expiration
      company_vehicle
      course_mopp
      created_at
      created_by
      id
      natural_person_id
      updated_at
      updated_by
    }
  }
`;
