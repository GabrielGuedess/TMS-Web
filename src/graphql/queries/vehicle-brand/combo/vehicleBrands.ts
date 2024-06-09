import { gql } from '@apollo/client';

export const QUERY_VEHICLE_BRANDS_COMBO = gql`
  query GetAllVehicleBrandCombo(
    $limit: Int
    $offset: Int
    $sort: VehicleBrandOrderByWithRelationInput
    $where: VehicleBrandWhereInput
  ) {
    getAllVehicleBrand(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      id
      name
    }
  }
`;
