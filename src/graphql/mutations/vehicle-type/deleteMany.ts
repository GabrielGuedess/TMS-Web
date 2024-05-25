import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_VEHICLE_TYPES = gql`
  mutation DeleteManyVehicleTypes($deleteManyVehicleTypes: [String!]!) {
    deleteManyVehicleTypes(deleteManyVehicleTypes: $deleteManyVehicleTypes) {
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
