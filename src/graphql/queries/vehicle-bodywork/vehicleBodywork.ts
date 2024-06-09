import { gql } from '@apollo/client';

export const QUERY_VEHICLE_VEHICLE_BODYWORK = gql`
  query GetVehicleBodyworkModel($getVehicleBodyworkModelId: String) {
    getVehicleBodyworkModel(id: $getVehicleBodyworkModelId) {
      VehicleTypes {
        id
        name
      }
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
