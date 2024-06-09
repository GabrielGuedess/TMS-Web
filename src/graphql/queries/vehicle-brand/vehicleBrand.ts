import { gql } from '@apollo/client';

export const QUERY_VEHICLE_BRAND = gql`
  query GetVehicleBrand($getVehicleBrandId: String) {
    getVehicleBrand(id: $getVehicleBrandId) {
      VehicleModels {
        id
        name
      }
      created_at
      created_by
      id
      name
      updated_at
      updated_by
    }
  }
`;
