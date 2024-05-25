import { gql } from '@apollo/client';

export const MUTATION_CREATE_VEHICLE_MODEL = gql`
  mutation CreateVehicleModel($vehicleModelInput: VehicleModelInput!) {
    createVehicleModel(vehicleModelInput: $vehicleModelInput) {
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
