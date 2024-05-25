import { gql } from '@apollo/client';

export const QUERY_VEHICLE_BRANDS = gql`
  query GetAllVehicleBrand(
    $limit: Int
    $offset: Int
    $sort: VehicleBrandOrderByWithRelationInput
    $where: VehicleBrandWhereInput
  ) {
    totalVehicleBrands(where: $where)
    getAllVehicleBrand(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      created_at
      created_by
      id
      name
      updated_at
      updated_by
    }
  }
`;
