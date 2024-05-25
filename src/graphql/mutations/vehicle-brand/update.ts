import { gql } from '@apollo/client';

export const MUTATION_UPDATE_VEHICLE_BRAND = gql`
  mutation UpdatedVehicleBrand(
    $updatedVehicleBrandId: String!
    $vehicleBrandUpdate: VehicleBrandUpdateInput!
  ) {
    updatedVehicleBrand(
      id: $updatedVehicleBrandId
      vehicleBrandUpdate: $vehicleBrandUpdate
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
