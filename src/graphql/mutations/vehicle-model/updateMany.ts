import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_VEHICLE_MODELS = gql`
  mutation UpdateManyVehicleModels(
    $updateManyVehicleModels: [VehicleModelUpdateManyInput!]!
  ) {
    updateManyVehicleModels(updateManyVehicleModels: $updateManyVehicleModels) {
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
