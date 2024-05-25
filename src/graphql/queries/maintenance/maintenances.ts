import { gql } from '@apollo/client';

export const QUERY_MAINTENANCES = gql`
  query GetAllMaintenance(
    $limit: Int
    $offset: Int
    $sort: MaintenanceOrderByWithRelationInput
    $where: MaintenanceWhereInput
  ) {
    countMaintenance(where: $where)
    getAllMaintenance(
      limit: $limit
      offset: $offset
      sort: $sort
      where: $where
    ) {
      created_at
      created_by
      finished_at
      id
      maintenance_company_id
      type_of_maintenance_id
      updated_at
      updated_by
      vehicle_id
    }
  }
`;
