import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_COMPANY_VEHICLES = gql`
  mutation UpdateManyCompanyVehicles(
    $updateManyCompanyVehicles: [CompanyVehicleUpdateManyInput!]!
  ) {
    updateManyCompanyVehicles(
      updateManyCompanyVehicles: $updateManyCompanyVehicles
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
