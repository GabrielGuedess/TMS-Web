import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_VEHICLE_TYPES = gql`
  mutation UpdateManyVehicleTypes(
    $updateManyVehicleTypes: [VehicleTypeUpdateManyInput!]!
  ) {
    updateManyVehicleTypes(updateManyVehicleTypes: $updateManyVehicleTypes) {
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
