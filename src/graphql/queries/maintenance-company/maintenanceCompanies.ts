import { gql } from '@apollo/client';

export const QUERY_MAINTENANCE_COMPANIES = gql`
  query GetAllMaintenanceCompany(
    $limit: Int
    $offset: Int
    $where: MaintenanceCompanyWhereInput
    $sort: MaintenanceCompanyOrderByWithRelationInput
  ) {
    countMaintenanceCompany(where: $where)
    getAllMaintenanceCompany(
      limit: $limit
      offset: $offset
      where: $where
      sort: $sort
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
