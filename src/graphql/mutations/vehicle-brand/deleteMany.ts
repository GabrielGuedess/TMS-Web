import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_VEHICLE_BRANDS = gql`
  mutation DeleteManyVehicleBrands($deleteManyVehicleBrands: [String!]!) {
    deleteManyVehicleBrands(deleteManyVehicleBrands: $deleteManyVehicleBrands) {
      created_at
      created_by
      id
      name
      updated_at
      updated_by
    }
  }
`;
