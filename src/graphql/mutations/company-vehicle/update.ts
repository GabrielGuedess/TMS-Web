import { gql } from '@apollo/client';

export const MUTATION_UPDATE_COMPANY_VEHICLE = gql`
  mutation UpdatedCompanyVehicle(
    $updatedCompanyVehicleId: String!
    $outsourced: CompanyVehicleUpdateInput!
  ) {
    updatedCompanyVehicle(
      id: $updatedCompanyVehicleId
      outsourced: $outsourced
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
