import { gql } from '@apollo/client';

export const MUTATION_DELETE_COMPANY_VEHICLE = gql`
  mutation DeleteCompanyVehicle($deleteCompanyVehicleId: String!) {
    deleteCompanyVehicle(id: $deleteCompanyVehicleId) {
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
