import { gql } from '@apollo/client';

export const QUERY_VEHICLE_TYPES_COMBO = gql`
  query GetAllVehicleTypesCombo(
    $limit: Int
    $offset: Int
    $sort: VehicleTypeOrderByWithRelationInput
    $where: VehicleTypeWhereInput
  ) {
    getAllVehicleTypes(
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
