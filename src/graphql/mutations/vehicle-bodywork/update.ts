import { gql } from '@apollo/client';

export const MUTATION_UPDATE_VEHICLE_BODYWORK = gql`
  mutation UpdateVehicleBodywork(
    $updateVehicleBodyworkId: String!
    $vehicleBodyworkIUpdate: VehicleBodyworkUpdateInput!
  ) {
    updateVehicleBodywork(
      id: $updateVehicleBodyworkId
      vehicleBodyworkIUpdate: $vehicleBodyworkIUpdate
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
