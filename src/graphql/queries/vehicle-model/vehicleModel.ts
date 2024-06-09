import { gql } from '@apollo/client';

export const QUERY_VEHICLE_MODEL = gql`
  query GetVehicleModel($getVehicleModelId: String) {
    getVehicleModel(id: $getVehicleModelId) {
      VehicleBrand {
        id
        name
      }
      VehicleType {
        id
        name
      }
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
