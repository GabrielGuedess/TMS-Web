import { gql } from '@apollo/client';

export const QUERY_OWN_DRIVER = gql`
  query GetOwnDriver($getOwnDriverId: String) {
    getOwnDriver(id: $getOwnDriverId) {
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
      NaturalPerson {
        id
        cpf
        name
      }
    }
  }
`;
