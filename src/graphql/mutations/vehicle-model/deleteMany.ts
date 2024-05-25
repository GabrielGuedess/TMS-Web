import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_VEHICLE_MODELS = gql`
  mutation DeleteManyVehicleModels($deleteManyVehicleModels: [String!]!) {
    deleteManyVehicleModels(deleteManyVehicleModels: $deleteManyVehicleModels) {
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
