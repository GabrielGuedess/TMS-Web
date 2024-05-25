import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_VEHICLE_BODYWORKS = gql`
  mutation DeleteManyVehicleBodyworks($deleteManyVehicleBodyworks: [String!]!) {
    deleteManyVehicleBodyworks(
      deleteManyVehicleBodyworks: $deleteManyVehicleBodyworks
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
