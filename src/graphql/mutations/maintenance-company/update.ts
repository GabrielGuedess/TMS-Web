import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MAINTENANCE_COMPANY = gql`
  mutation UpdateMaintenanceCompany(
    $updateMaintenanceCompanyId: String!
    $maintenancecompanyInput: MaintenanceCompanyUpdateInput!
  ) {
    updateMaintenanceCompany(
      id: $updateMaintenanceCompanyId
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
