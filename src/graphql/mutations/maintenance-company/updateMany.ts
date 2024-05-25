import { gql } from '@apollo/client';

export const MUTATION_UPDATE_MANY_MAINTENANCE_COMPANIES = gql`
  mutation UpdateManyMaintenanceCompany(
    $data: [MaintenanceCompanyUpdateManyInput!]!
  ) {
    updateManyMaintenanceCompany(data: $data) {
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
