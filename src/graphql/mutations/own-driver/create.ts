import { gql } from '@apollo/client';

export const MUTATION_CREATE_OWN_DRIVER = gql`
  mutation CreateOwnDriver($ownDriver: OwnDriverInput!) {
    createOwnDriver(ownDriverInput: $ownDriver) {
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
