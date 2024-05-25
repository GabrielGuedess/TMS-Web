import { gql } from '@apollo/client';

export const MUTATION_DELETE_VEHICLE_BRAND = gql`
  mutation DeleteVehicleBrand($deleteVehicleBrandId: String!) {
    deleteVehicleBrand(id: $deleteVehicleBrandId) {
      created_at
      created_by
      id
      name
      updated_at
      updated_by
    }
  }
`;
