import { gql } from '@apollo/client';

export const MUTATION_CREATE_VEHICLE_TYPE = gql`
  mutation CreateVehicleType($vehicleTypeCreate: VehicleTypeInput!) {
    createVehicleType(vehicleTypeCreate: $vehicleTypeCreate) {
      bodyWork
      created_at
      created_by
      id
      name
      updated_at
      updated_by
    }
  }
`;
