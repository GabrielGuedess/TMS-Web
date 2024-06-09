import { gql } from '@apollo/client';

export const QUERY_MAINTENANCE_COMPANIES_COMBO = gql`
  query GetAllMaintenanceCompanyCombo(
    $limit: Int
    $offset: Int
    $where: MaintenanceCompanyWhereInput
    $sort: MaintenanceCompanyOrderByWithRelationInput
  ) {
    getAllMaintenanceCompany(
      limit: $limit
      offset: $offset
      where: $where
      sort: $sort
    ) {
      id
      specialty_maintenance
      LegalPerson {
        cnpj
      }
    }
  }
`;
