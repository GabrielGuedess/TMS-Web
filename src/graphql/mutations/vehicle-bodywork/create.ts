import { gql } from '@apollo/client';

export const MUTATION_CREATE_VEHICLE_BODYWORK = gql`
  mutation CreateVehicleBodywork($vehicleBodyworkInput: VehicleBodyworkInput!) {
    createVehicleBodywork(vehicleBodyworkInput: $vehicleBodyworkInput) {
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
