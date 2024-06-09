import { gql } from '@apollo/client';

export const QUERY_MAINTENANCE_COMPANY = gql`
  query GetMaintenanceCompanyModel($getMaintenanceCompanyModelId: String) {
    getMaintenanceCompanyModel(id: $getMaintenanceCompanyModelId) {
      LegalPerson {
        id
        cnpj
        fantasy_name
      }
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
