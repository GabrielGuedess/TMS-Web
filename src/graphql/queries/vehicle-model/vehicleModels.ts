import { gql } from '@apollo/client';

export const QUERY_VEHICLE_MODELS = gql`
  query GetAllVehicleModel(
    $limit: Int
    $offset: Int
    $sort: VehicleModelOrderByWithRelationInput
    $where: VehicleModelWhereInput
  ) {
    totalVehicleModels(where: $where)
    getAllVehicleModel(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      axles
      brand_id
      capacity_max
      capacity_per_axle
      created_at
      created_by
      id
      name
      type_id
      updated_at
      updated_by
      weight
    }
  }
`;
