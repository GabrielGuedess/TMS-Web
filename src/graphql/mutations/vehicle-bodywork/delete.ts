import { gql } from '@apollo/client';

export const MUTATION_DELETE_VEHICLE_BODYWORK = gql`
  mutation DeleteVehicleBodywork($deleteVehicleBodyworkId: String!) {
    deleteVehicleBodywork(id: $deleteVehicleBodyworkId) {
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
