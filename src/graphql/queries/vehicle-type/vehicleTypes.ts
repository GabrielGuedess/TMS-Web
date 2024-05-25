import { gql } from '@apollo/client';

export const QUERY_VEHICLE_TYPES = gql`
  query GetAllVehicleTypes(
    $limit: Int
    $offset: Int
    $sort: VehicleTypeOrderByWithRelationInput
    $where: VehicleTypeWhereInput
  ) {
    totalVehicleTypes(where: $where)
    getAllVehicleTypes(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      bodyWork
      created_at
      created_by
      id
      name
      updated_at
      updated_by
    }
  }
`;
