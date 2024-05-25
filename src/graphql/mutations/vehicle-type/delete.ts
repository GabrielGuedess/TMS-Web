import { gql } from '@apollo/client';

export const MUTATION_DELETE_VEHICLE_TYPE = gql`
  mutation DeleteVehicleType($deleteVehicleTypeId: String!) {
    deleteVehicleType(id: $deleteVehicleTypeId) {
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
