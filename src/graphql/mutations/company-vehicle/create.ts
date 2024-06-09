import { gql } from '@apollo/client';

export const MUTATION_CREATE_COMPANY_VEHICLE = gql`
  mutation CreateCompanyVehicle($companyVehicleInput: CompanyVehicleInput!) {
    createCompanyVehicle(CompanyVehicleInput: $companyVehicleInput) {
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
