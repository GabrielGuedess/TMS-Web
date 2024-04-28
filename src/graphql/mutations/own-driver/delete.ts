import { gql } from '@apollo/client';

export const MUTATION_DELETE_OWN_DRIVER = gql`
  mutation DeleteOwnDriver($deleteOwnDriverId: String!) {
    deleteOwnDriver(id: $deleteOwnDriverId) {
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
