import { gql } from '@apollo/client';

export const MUTATION_CREATE_VEHICLE_BRAND = gql`
  mutation CreateVehicleBrand($vehicleBrandInput: VehicleBrandInput!) {
    createVehicleBrand(vehicleBrandInput: $vehicleBrandInput) {
      created_at
      created_by
      id
      name
      updated_at
      updated_by
    }
  }
`;
