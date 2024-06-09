import { gql } from '@apollo/client';

export const QUERY_VEHICLE_VEHICLE_BODYWORKS_COMBO = gql`
  query GetAllVehicleBodyworkCombo(
    $limit: Int
    $offset: Int
    $where: VehicleBodyworkWhereInput
    $sort: VehicleBodyworkOrderByWithRelationInput
  ) {
    getAllVehicleBodywork(
      limit: $limit
      offset: $offset
      where: $where
      sort: $sort
    ) {
      axles
      id
    }
  }
`;
