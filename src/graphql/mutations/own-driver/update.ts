import { gql } from '@apollo/client';

export const MUTATION_UPDATE_OWN_DRIVER = gql`
  mutation UpdateOwnDriver(
    $updateOwnDriverId: String!
    $ownDriverUpdate: OwnDriverUpdate!
  ) {
    updateOwnDriver(id: $updateOwnDriverId, ownDriverUpdate: $ownDriverUpdate) {
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
