import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_VEHICLE_BRANDS = gql`
  mutation UpdateManyVehicleBrands(
    $updateManyVehicleBrands: [VehicleBrandUpdateManyInput!]!
  ) {
    updateManyVehicleBrands(updateManyVehicleBrands: $updateManyVehicleBrands) {
      created_at
      created_by
      id
      name
      updated_at
      updated_by
    }
  }
`;
