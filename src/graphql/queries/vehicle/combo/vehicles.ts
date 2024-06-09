import { gql } from '@apollo/client';

export const QUERY_VEHICLES_COMBO = gql`
  query GetAllVehiclesCombo(
    $limit: Int
    $offset: Int
    $sort: VehicleOrderByWithRelationInput
    $where: VehicleWhereInput
  ) {
    getAllVehicles(limit: $limit, offset: $offset, sort: $sort, where: $where) {
      antt
      color
      id
      isIpvaPaid
      model_id
      plate
      registration
      renavam
      year
      VehicleModel {
        name
      }
    }
  }
`;
