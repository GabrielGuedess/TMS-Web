import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_VEHICLE_BODYWORKS = gql`
  mutation UpdateManyVehicleBodyworks(
    $updateManyVehicleBodyworks: [VehicleBodyworkUpdateManyInput!]!
  ) {
    updateManyVehicleBodyworks(
      updateManyVehicleBodyworks: $updateManyVehicleBodyworks
    ) {
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
