import { gql } from '@apollo/client';

export const QUERY_VEHICLE_VEHICLE_BODYWORKS = gql`
  query GetAllVehicleBodywork(
    $limit: Int
    $offset: Int
    $where: VehicleBodyworkWhereInput
    $sort: VehicleBodyworkOrderByWithRelationInput
  ) {
    totalVehicleBodyworks(where: $where)
    getAllVehicleBodywork(
      limit: $limit
      offset: $offset
      where: $where
      sort: $sort
    ) {
      axles
      created_at
      created_by
      id
      mass
      name
      updated_at
      updated_by
      volume
    }
  }
`;
