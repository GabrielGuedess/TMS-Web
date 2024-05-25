import { gql } from '@apollo/client';

export const MUTATION_CREATE_MAINTENANCE_COMPANY = gql`
  mutation CreateMaintenanceCompany(
    $maintenancecompanyInput: MaintenanceCompanyInput!
  ) {
    createMaintenanceCompany(
      maintenancecompanyInput: $maintenancecompanyInput
    ) {
      created_at
      created_by
      id
      legal_person_id
      specialty_maintenance
      updated_at
      updated_by
    }
  }
`;
