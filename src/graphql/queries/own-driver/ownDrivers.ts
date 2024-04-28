import { gql } from '@apollo/client';

export const QUERY_OWN_DRIVERS = gql`
  query GetAllOwnDriver(
    $limit: Int
    $offset: Int
    $sort: OwnDriverOrderByWithRelationInput
    $where: OwnDriverWhereInput
  ) {
    totalOwnDrivers(where: $where)
    getAllOwnDriver(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
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
