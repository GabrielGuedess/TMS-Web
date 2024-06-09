import { gql } from '@apollo/client';

export const MUTATION_DELETE_MANY_COMPANY_VEHICLES = gql`
  mutation DeleteManyCompanyVehicles($deleteManyCompanyVehicles: [String!]!) {
    deleteManyCompanyVehicles(
      deleteManyCompanyVehicles: $deleteManyCompanyVehicles
    ) {
      carrier_company_id
      created_at
      created_by
      id
      updated_at
      updated_by
      vehicle_id
    }
  }
`;
