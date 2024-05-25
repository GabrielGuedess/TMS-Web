import { gql } from '@apollo/client';

export const MUTATION_DELETE_MAINTENANCE_COMPANY = gql`
  mutation DeleteMaintenanceCompany($deleteMaintenanceCompanyId: String!) {
    deleteMaintenanceCompany(id: $deleteMaintenanceCompanyId) {
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
