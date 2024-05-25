import { gql } from '@apollo/client';

export const MUTATION_UPDATE_VEHICLE_MODEL = gql`
  mutation UpdatedVehicleModel(
    $updatedVehicleModelId: String!
    $vehicleModelUpdate: VehicleModelUpdateInput!
  ) {
    updatedVehicleModel(
      id: $updatedVehicleModelId
      vehicleModelUpdate: $vehicleModelUpdate
    ) {
      axles
      brand_id
      capacity_max
      capacity_per_axle
      created_at
      created_by
      id
      name
      type_id
      updated_at
      updated_by
      weight
    }
  }
`;
