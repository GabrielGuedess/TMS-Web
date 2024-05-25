import { gql } from '@apollo/client';

export const MUTATION_UPDATE_VEHICLE_TYPE = gql`
  mutation UpdatedVehicleType(
    $updatedVehicleTypeId: String!
    $vehicleTypeInput: VehicleTypeUpdateInput!
  ) {
    updatedVehicleType(
      id: $updatedVehicleTypeId
      vehicleTypeInput: $vehicleTypeInput
    ) {
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
