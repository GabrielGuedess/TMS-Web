import { gql } from '@apollo/client';

export const MUTATION_DELETE_VEHICLE_MODEL = gql`
  mutation DeleteVehicleModel($deleteVehicleModelId: String!) {
    deleteVehicleModel(id: $deleteVehicleModelId) {
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
